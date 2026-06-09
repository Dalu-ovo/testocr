const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`OCR 서버 실행 중: http://localhost:${PORT}`);
  console.log('브라우저에서 위 주소를 열어 PDF를 업로드하세요.');
});
