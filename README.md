highlight
=========

Highlight match words  from DOM

        <script src="highlight.js"></script>

        <style type="text/css">
                .match{color:yellow;}
                .match2{color:red;}
        </style>


        <script type="text/javascript">
                $(document).ready(function() {
                    var key = '1500 1960';
                    $("a").light({class: 'match2', key: 'example'});
                    $("p").light({key: key});
                });
        </script>

