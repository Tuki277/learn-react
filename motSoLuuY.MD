// set cho chạy port khác package.json/start để đổi port
-- set chay voi port khac port 3000 mac dinh
"start": "set port=4000 && react-scripts start"

// Component là các thành phần của một trang web, trang web được tạo nên từ nhiều component

// Ham render : trả ra giao diện người dùng

// Root file của react là %PUBLIC_URL%

// càng chia nhỏ các components thì càng dễ quản lý

// cách viết function là cách viết theo cách cũ, class là cách viết của cú phát ES6

//=================================================================================================================================
++ Props

// Props là thuộc tính của Conponents

// Truyền dữ liệu từ cha -> con, theo dạng key="value" ( không đặt tên key = children ) value nhận vào dữ liệu là kiểu chuỗi. Bỏ dấu { } để truyền đúng kiểu dữ liệu

// Nhận lại thông qua từ khóa : this.props.key
