
        $(document).ready(function () {
            var dropdown = $("#province");
            var dropdownDistrict = $("#district");
            var dropdownSubDistrict = $("#subdistrict");


            dropdown.empty();
            dropdown.append('<option selected="true" disabled>--เลือกจังหวัด--</option>');
            dropdown.prop('selectedIndex', 0);
            var url = "/JsonFile/ProvinceTH.json";
            $.getJSON(url, function (data) {
                $.each(data, function (index, value) {
                    dropdown.append('<option value="' + value.pid + '">' + value.name + '</option>');
                    });
            });



            $("#province").change(function () {
                var pid = $("#province").val();

                dropdownDistrict.empty();
                dropdownDistrict.append('<option selected="true" disabled>--เลือกอำเภอ--</option>');
                dropdownDistrict.prop('selectedIndex', 0);
                var urljson_district = "/JsonFile/DistrictTH.json";
                $.getJSON(urljson_district, function (data) {
                    $.each(data, function (index, value) {
                        if (value.province_id == pid) {
                            dropdownDistrict.append('<option value="' + value.pid + '">' + value.name + '</option>');
                        }
                        
                    });
                });
            });


            $("#district").change(function () {
                var did = $("#district").val();
                dropdownSubDistrict.empty();
                dropdownSubDistrict.append('<option selected="true" disabled>--เลือกตำบล--</option>');
                dropdownSubDistrict.prop('selectedIndex', 0);
                var urljson_subdistrict = "/JsonFile/SubDistrictTH.json";
                $.getJSON(urljson_subdistrict, function (data) {
                    $.each(data, function (index, value) {
                        if (value.district_id == did) {
                            dropdownSubDistrict.append('<option value="' + value.pid + '">' + value.name + '</option>');
                        }

                    });
                });
            });

        });

