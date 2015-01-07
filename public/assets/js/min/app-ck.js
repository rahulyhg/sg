$(document).ready(function () {
    function e() {
        var e = document.getElementById("map_canvas"), n = new google.maps.LatLng(6.4475657, 3.4724711), t = "custom_style", r = [{stylers: [{hue: "#fdbc40"}, {gamma: 1}, {weight: 3}]}, {
            featureType: "water",
            stylers: [{color: "#43bcf0"}]
        }], o = {
            center: n,
            zoom: 16,
            mapTypeControlOptions: {mapTypeIds: [google.maps.MapTypeId.ROADMAP, t]},
            mapTypeId: t
        }, s = new google.maps.Map(e, o), l = new google.maps.Marker({
            position: n,
            map: s,
            title: "SuperGeeks",
            animation: google.maps.Animation.DROP
        });
        google.maps.event.addListener(l, "click", a);
        var p = {name: "Custom Style"}, i = new google.maps.StyledMapType(r, p);
        s.mapTypes.set(t, i)
    }

    function a() {
        marker.setAnimation(null != marker.getAnimation() ? null : google.maps.Animation.BOUNCE)
    }

    var n = $(".quote"), t = $("#map_canvas"), r = $(".overlay"), o = $(".js-quote-button");
    n.on("blur", ".error", function () {
        $(this).find("p").slideUp(), $(this).removeClass("error")
    }), n.on("submit", function (e) {
        var a = $("input[name='name']"), t = $("input[name='email'"), r = $("input[name='phone']"), o = $("input[name='device']"), s = $("input[name='device_model']"), l = $("input[name='device_manufacturer"), p = $("textarea[name='issue']"), i = $(".quoteform");
        errorCount = 0, emailPattern = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim, numberPattern = /[0-9-\/]{6,12}/, n.find("li p").remove(), a.val().length < 2 && (a.parent().addClass("error").append("<p>Please input a valid name"), errorCount++), emailPattern.test(t.val()) || (t.parent().addClass("error").append("<p>Please input a valid email address"), errorCount++), numberPattern.test(r.val()) || (r.parent().addClass("error").append("<p>Please input a valid phone number"), errorCount++), o.val().length < 2 && (o.parent().addClass("error").append("<p>Please input a valid device"), errorCount++), s.val().length < 2 && (s.parent().addClass("error").append("<p>Please input a valid device model"), errorCount++), l.val().length < 2 && (l.parent().addClass("error").append("<p>Please input a valid device manufacturer"), errorCount++), p.val().length < 2 && (p.parent().addClass("error").append("<p>Please input the issue with your device"), errorCount++), 0 == errorCount && $.post($(this).attr("action"), $(this).serialize(), function (e) {
            1 == e.success && (n.remove(), i.append("<p>Thank you for your request. We will give you a reply in the shortest possible time"))
        }), e.preventDefault()
    }), $closeQuote = $(".js-close-quote"), $closeQuote.on("click", function () {
        r.fadeOut("slow"), $("body").removeClass("stopScroll")
    }), o.on("click", function () {
        r.fadeIn("slow"), $("body").addClass("stopScroll")
    }), t && e()
});