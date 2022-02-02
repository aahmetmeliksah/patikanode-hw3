/*
Daire Modüler Dosyası
Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.
module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.
Kolay gelsin.
*/
function circleCircumference(r) {
  console.log(`Area: ${Math.PI * r}`);
}

function circleArea(r) {
  console.log(`Circumference: ${Math.PI * r * 2}`);
}

module.exports = {
  circleArea,
  circleCircumference,
};
