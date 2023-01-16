`assert(value[, message])`: tests if value is truthy, it throws an error with the provided message if the value is falsy.
`assert.deepEqual(actual, expected[, message])`: tests for deep equality between actual and expected.
`assert.deepStrictEqual(actual, expected[, message])`: tests for deep equality between actual and expected, and compares types
`assert.doesNotThrow(block[, error][, message])`: tests that a block of code does not throw an error.
`assert.equal(actual, expected[, message])`: tests for equality between actual and expected using the == operator.
`assert.fail([message])`: forces a failure.
`assert.ifError(value)`: tests if value is falsy, it throws if value is truthy.
`assert.notDeepEqual(actual, expected[, message])`: tests for any deep inequality between actual and expected.
`assert.notDeepStrictEqual(actual, expected[, message])`: tests for any deep inequality between actual and expected and compares types
`assert.notEqual(actual, expected[, message])`: tests for inequality between actual and expected using the != operator.
`assert.notStrictEqual(actual, expected[, message])`: tests for inequality between actual and expected using the !== operator.
`assert.ok(value[, message])`: tests if value is truthy, it is equivalent to assert(value, message)
`assert.strictEqual(actual, expected[, message])`: tests for equality between actual and expected using the === operator.
`assert.throws(block[, error][, message])`: tests that a block of code throws an error.