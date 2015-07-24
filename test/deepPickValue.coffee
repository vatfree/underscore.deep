describe '#_.deepPickValue', ->
  describe 'When the property exists', ->
    it 'Should return the value', ->
      testObject =
        'abc': '123': 'bar'
        'foo': 'bar': 'is': 'very': awesome: true
      expect(_.deepPickValue(testObject, 'abc.123')).to.equal 'bar'
      expect(_.deepPickValue(testObject, 'foo.bar.is.very.awesome')).to.equal true
      return
    return
  it 'Should return the undefined', ->
    testObject = 'abc': '123': false
    expect(_.deepPickValue(testObject, 'test.123')).to.equal undefined
    return
  return
