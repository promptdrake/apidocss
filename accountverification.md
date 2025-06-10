# ⚠️ Penting: KYC Diperlukan (UNTUK SWITCH QRIS)

 - API ini memerlukan proses **KYC** di [client.aisbirnusantara.com](https://client.aisbirnusantara.com).
 - KYC bertujuan untuk menghindari hal-hal yang tidak diinginkan, sesuai [Terms](/terms) dan [FAQ](https://www.aisbirnusantara.com/#faq) (lihat poin 3).
 - Email Service Kita Menggunakan dari GMAIL [cubesaisbir@gmail.com](mailto:cubesaisbir@gmail.com)
 - Api Kami Menggunakan Payment gateway dari [DUITKU](https://duitku.com) dan [ORDERKUOTA](https://orderkuota.com/)

## Verifikasi data

### 1. BOT AUTO ORDER (Khusus penyewa bot)
- **KYC tidak diperlukan** untuk pelanggan Bot Auto Order.
- Syarat:
    - Kirim gambar kepemilikan store dan nomor customer service.
    - Kamu dapat membuat QRIS secara dinamis, namun harus menyediakan jumlah transaksi yang sah.
    - API akan diatur untuk expired (khusus buyer yang sewa bot di Aisbir Nusantara). Jika API expired, kamu tidak bisa menerima transaksi lagi.
    - Contoh foto dibawah
    ![Contoh Foto Verifikasi](/telekyc.jpg)
    ![Contoh Foto Verifikasi](/wakyc.jpg)
    - Informasi
        - untuk whatsapp kamu perlu screenshot storemu dan kamu adalah sebagai adminnya
        - untuk telegram juga sama


### 2. OUT OF SERVICE
- **KYC diperlukan**
- Untuk melakukan Service kyc untuk Student yang sedang berada dalam dunia perkuliahan bisa verifikasi otomatis melalui [Verifikasi Mahasiswa](https://client.aisbirnusantara.com/dashboard/verifikasimahasiswa), kami tetap bisa verifikasi dalam masa SMK / SMP melalui [Verifikasi murid](https://client.aisbirnusantara.com/dashboard/verifikasimurid)
- Syarat:
    - Kirim Software apa yang kamu gunakan
    - Kirim IP vps mu untuk whitelist (bisa diganti melalui client area).
    - Kirim akun customer service produk terkait
    - Uang bisa di cashout ke ewallet atau bank
- Document
    - Verifikasi Muka (Akun owner terkait)
    - Kartu identitas dari pihak sekolah atau kuliah (Kami Membuat api ini untuk projek STUDENT)
    - Diluar Projek Yang diluar dari projek sekolah / kuliah, kami tidak akan approve
    - kamu wajib mengirimkan foto wajah untuk keperluan e-kyc
    - kamu wajib mengirimkan data yang diperlukan (Dikirim melalui email)
    - kamu wajib memverifikasi email student, email yang kami terima yaitu
        - .ac.id
        - .sch.id
        - .smk.belajar.id
        - .smp.belajar.id
        - .guru.belajar.id (Untuk Guru identitas student bisa tidak di isi)
        - .belajar.id
    - untuk software website wajib menggunakan webhook
- Benefit
    - Menerima Pembayaran Via Alfamart / QRIS / Transfer Ewallet (Shopee)
    - Fee yang ringan untuk skala student
    - Contoh kyc service
     ![Contoh Foto Verifikasi](/servicekyc.jpg)

## Account Rule
Jika akun kamu melanggar dari terms kita, maka api akan kita cabut dan kamu tidak bisa melakukan cashout dan akun kamu kami suspend permanent,
pembuatan akun baru dengan data yang sama akan menyebabkan suspend akun lagi, dan terkhusus OUT OF SERVICE kami tidak menerima gambar yang memiliki standar seperti <b>AI GENERATED, RESOLUSI PECAH, EMAIL YANG BUKAN BERDOMAIN DARI ATAS</b>

## Security
Kami menyimpan semua informasi pribadimu secara aman, dan jika verifikasi telah selesai kami akan menyimpan di home server kami, bukan menggunakan server yang rental dari provider cloud demi keamanan data kamu