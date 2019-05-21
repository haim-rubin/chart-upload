const httpStatus = require('http-status')
const supertest = require('supertest')
const config = require('../config.json')
const expect = require('expect.js')
const path = require('path')
const baseUrl = `http://localhost:${config.port}`
const request = supertest(baseUrl)


describe('Post /chart', function() {
    it('responds with valid json and message', function(done) {
      request
        .post('/chart')
        .send({ content: 'This is the chart content'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(res =>{
          const { fileName } = JSON.parse(res.text)
          expect(path.extname(fileName)).to.eql(`.${config.extension}`)
        })
        .expect(httpStatus.OK, done)

    })
})


describe('Post /chart without content', function() {
  it('Should response error', function(done) {
    request
      .post('/chart')
      .send({ content: ''})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect( res => {
        const { message } = JSON.parse(res.text)
        expect(message).to.eql(`Chart content wasn't supplied`)
      })
      .expect(httpStatus.BAD_REQUEST, done)
  })
})