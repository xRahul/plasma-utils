/**
 * Base model that makes use of a particular schema.
 * Can be extended by other classes with different schemas.
 */
class BaseModel {
  constructor (args, schema) {
    this.schema = schema

    if (args instanceof String || typeof args === 'string') {
      args = this.schema.decode(args)
    }

    this.args = this.schema.preprocess(args)
    this.schema.validate(args)
  }

  get encoded () {
    return this.schema.encode(this.args)
  }

  get decoded () {
    return this.args
  }
}

module.exports = BaseModel
