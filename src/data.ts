export default (()=>{
  const csv = `Nomor Induk,Nama,Asal
22042001371,Anesti Nesimnasi,Nusa Tenggara Timur
22042001372,Fabianus Bau,Nusa Tenggara Timur
22042001373,Febrianus Bere,Nusa Tenggara Timur
22042001374,Ferdy Kurniawan,Jambi
22042001375,Irfan Febriano,DKI Jakarta
22042001376,Mohammad Dwikurnia Apriadi,Jawa Barat
22042001377,Mualif fadli,Lampung
22042001378,Muhammad Fachmi Fauzan,Jawa Barat
22042001379,Muhammad Divanda Pratama,Lampung
22042001380,Muhammad Hanif Ferdiansyah,Jawa Tengah
22042001381,Mulyana,Jawa Barat
22042001382,Naimatul Khoiryyah,Jambi
22042001383,Nilakshan,Sri Lanka
22042001384,Dina Melani,Jawa Barat
22042001385,Muhammad Riski Al-Fadilah,Jawa Barat
22042001386,Sitti Khotimah,Sulawesi Tenggara
23043001387,Adrianus A Talan,Nusa Tenggara Timur
23043001388,Aladias Yuyan To Ama,Nusa Tenggara Timur
23043001389,Albert Sutanto Tanono,Nusa Tenggara Timur
23043001390,Alfa Minang Edison Sarata,Nusa Tenggara Timur
23043001391,Andre,Jawa Barat
23043001392,Bonianus Bere Seran,Nusa Tenggara Timur
23043001393,Charma Putra Albergati Naga Lanaima,Papua Selatan
23043001394,Deksi Talan,Nusa Tenggara Timur
23043001395,Delwin Baineo,Nusa Tenggara Timur
23043001396,Dimas Saputra,Lampung
23043001397,Dwi Setia Anggara,Nusa Tenggara Barat
23043001398,Eviano Soares Sarmento,Nusa Tenggara Timur
23043001399,Indah Sari,Nusa Tenggara Barat
23043001400,Irawati,Nusa Tenggara Barat
23043001401,Jayadi,Kalimantan Tengah
23043001402,Jetro Boimau,Nusa Tenggara Timur
23043001403,Jukanli Elen Selan,Nusa Tenggara Timur
23043001404,Laurensius Moensaku,Nusa Tenggara Barat
23043001405,Mariana Hellin,Nusa Tenggara Barat
23043001406,Mariati Sulastiwati,Nusa Tenggara Barat
23043001407,Mario Wansa Nubatonis,Nusa Tenggara Timur
23043001408,Matilda Novia Binjang,Nusa Tenggara Timur
23043001409,Melkianus Yacob Mau,Nusa Tenggara Timur
23043001410,Muh Kevin Ismail Haz,Jawa Barat
23043001411,Pardi Santoso,Kalimantan Tengah
23043001412,Rendi Cahyadi,Jawa Barat
23043001413,Rendi Eka Saputra,Jawa Barat
23043001414,Rofandi Ardino Ndapa Huda,Nusa Tenggara Timur
23043001415,Tarsisius Mokay Mahuze,Papua Selatan
23043001416,Wantry Semuel Tuke,Nusa Tenggara Timur
23043001417,Willi Brodus Sae,Nusa Tenggara Timur
23043001418,Willy Dethan,Nusa Tenggara Timur
23043001419,Yodi Elisabet Nomeni,Nusa Tenggara Timur
23043001420,Yohanes Novaldo Christian Ama,Nusa Tenggara Timur
23043001421,Yohanis Ledoh,Nusa Tenggara Timur
23043001422,Yufenti Manao,Nusa Tenggara Timur
23043001423,Yuniarti Natalia Maubila,Nusa Tenggara Timur
23043001424,Yusuf Baok,Nusa Tenggara Timur
23044001425,Adi Ahmad Syafi'i,Lampung
23044001426,Adriyansyah,Sumatera Selatan
23044001427,Agus,Jawa Barat
23044001428,Aldi Ronaldo Pulanda,
23044001429,Ardi Manjaba,Bali
23044001430,Dandi Aditya,Jawa Barat
23044001431,Daris,Jawa Barat
23044001432,Egidius Lase,Jawa Barat
23044001433,Elang Waskita,Jawa Barat
23044001434,Fenirenalda Tanggu Sana,Nusa Tenggara Timur
23044001435,Fidelis Nahak,Nusa Tenggara Timur
23044001436,Hans Y. Foruat,Maluku
23044001437,Herman hebu Kadodo,Nusa Tenggara Timur
23044001438,Idar,Jawa Barat
23044001439,Ihsandin Kasno Putro,Jawa Timur
23044001440,Imam saputra,Bali
23044001441,Irfan romadoni,Lampung
23044001442,Muhammad Abdul Hamid,Jawa Tengah
23044001443,Muhammad Hafiz Sarwono,Jawa Tengah
23044001444,Muhammad Khanafi,Aceh
23044001445,Muhammad Lutfi,Jawa Barat
23044001446,Muslem,Aceh
23044001447,Nirwana Eka Puspita,Maluku
23044001448,Paulus Anderson Depametow,
23044001449,Rafi Andriyanto,Lampung
23044001450,Rizky Khilma Mubarok,Lampung
23044001451,Salman Fauzi,Jawa Barat
23044001452,Samsul Bahri,Aceh
23044001453,Satrio Dandi,Lampung
23044001454,Suci Arrahmi,Aceh
23044001455,Yafet octovianaus marey,
23044001456,Yanuarius Ndiken,
23044001457,Yesaya jikwa,
23044001458,Yulius Bere Halek,Nusa Tenggara Timur`;
  const matrix = csv.split('\n').map(row=>row.split(','));
  //const json = matrix.slice(1).map(row=>row.reduce((prev,curr,i)=>{prev[matrix[0][i]]=curr;return prev;},{}))
  return matrix.slice(1).map(row=>{return {no:row[0],nama:row[1],asal:row[2]}});
})()