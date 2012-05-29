exports = module.exports = {
  instance: {
    values: [],
    getIndex: function(name) {
      for (var i = 0; i < this.registry.length; i++) {
        if (this.values[i].name === name) {
          return i;
        }
      }
      return null;
    },
    set : function(name, value) {
      if (this.get(name) === null) {
        this.values.push({ name: name, value: value });
      } else {
        this.values[this.getIndex(name)].value = value;
      }
    },
    get: function(name) {
      for (var i = 0; i < this.values.length; i++) {
        if (this.values[i].name === name) {
          return this.values[i].value;
        }
      }
      return null;
    },
    reset: function() {
      this.values = [];
    }
  }
};