# list.regsearch.js
An Regular Expression plugin for List.js

# Requires
  - List.Js

# Usage

    <script type="text/javascript">
      var list = new List({
        valueNames: [...],
        plugins: [
            ListRegSearch(),
        ]
      });

      listObj.regsearch.search("mySearchString", ([col1, col2, ...]));
    </script>

## License
MIT
