// Main.js

var app = {

    initialize: function () {

        self.renderHomeView();
    },

    displayNow: function () {
        var currentDate = new Date()
        var day = currentDate.getDate()
        var month = currentDate.getMonth() + 1
        var year = currentDate.getFullYear()
        this.currentNow = ("<b>" + day + "/" + month + "/" + year + "</b>")
    },

    renderHomeView: function() {
        var html =
            "<div class='header'><h1>Home</h1></div>" +
                "<div class='search-view'>" +
                "<input class='search-key'/>" +
                "<ul class='employee-list'></ul>" +
                "</div>"
        $('body').html(html);
    }
}



app.initialize();

