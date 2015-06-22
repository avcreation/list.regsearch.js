var classes = require('classes'),
  events = require('event');

module.exports = function (options) {
  options = options || {};

  var list, columns, searchString;

  var checkValues = function(values, column) {
    if (values.hasOwnProperty(column)) {
      text = values[column];
      if ((searchString !== "") && (Boolean(text.match(RegExp(searchString, 'i'))))) {
        return true;
      }
    }
    return false;
  };

  var checkItem = function(item) {
    item.found = false;
    for (var j = 0, jl = columns.length; j < jl; j++) {
      if (checkValues(item.values(), columns[j])) {
        item.found = true;
        return;
      }
    }
  };

  var searchList = function() {
    for (var k = 0, kl = list.items.length; k < kl; k++) {
      checkItem(list.items[k]);
    }
  };


  var reset = function() {
    list.reset.search();
    list.searched = false;
  };

  return {
    init: function (parentList) {
      list = parentList;
    },
    name: options.name || "regsearch",
    search: function(searchStr, cols) {
      var text;

      list.i = 1;

      columns = (cols === undefined) ? list.valueNames : cols;

      if (searchStr === "" ) {
        reset();
      } else {
          searchString = searchStr;
        list.searched = true;
        searchList(list);
      }
      list.update();

      return list.visibleItems;
    }
  };
};
