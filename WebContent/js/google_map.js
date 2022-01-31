

 let map;
        function initMap() {
            var JSL = {lat: 36.3269951, lng: 127.4076784};

            var defaultOptions = {
                zoom: 17,
                center: JSL,
                disableDefaultUI:true,
                zoomControl: true
                };
            map = new google.maps.Map(document.getElementById('map'), defaultOptions);

            var marker = new google.maps.Marker({position: JSL, map: map});
        }