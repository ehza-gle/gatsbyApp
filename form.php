<html>
<body>

Terima kasih <?php echo $_POST["name"]; ?> telah melauan booking service<br>
informasi booking service anda sebagai berikut :
Nomor telpon anda: <?php echo $_POST["nomor-telpon"]; ?><br>
alamat email anda: <?php echo $_POST["email"]; ?><br>
anda melakukan booking service di dealer DKU <?php echo $_POST["lokasi-service"]; ?><br>
kendaraan anda <?php echo $_POST["model-kendaraan"]; ?> <?php echo $_POST["tipe-kenadaraan"]; ?> dengan nomor polisi <?php echo $_POST["nomor-polisi"]; ?><br>
layanan service yang ada booking <?php echo $_POST["jenis-layanan"]; ?><br>
anda melakukan booking service pada <?php echo $_POST["tanggal"]; ?> jam <?php echo $_POST["jam"]; ?><br>
</body>
</html>