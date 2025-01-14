<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat Uygulaması</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }
        .container {
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        h1, h2 {
            color: #333;
        }
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        ul li {
            margin: 5px 0;
        }
        code {
            background: #f4f4f4;
            padding: 2px 4px;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Chat Uygulaması</h1>
        <p>Bu proje, Node.js ve Socket.IO kullanarak gerçek zamanlı bir sohbet uygulaması geliştirmeyi amaçlamaktadır.</p>

        <h2>Özellikler</h2>
        <ul>
            <li><strong>Gerçek Zamanlı Mesajlaşma</strong>: Kullanıcılar, gerçek zamanlı olarak mesaj gönderip alabilirler.</li>
            <li><strong>Çoklu Sohbet Odaları</strong>: Farklı sohbet odalarına katılma ve yeni odalar oluşturma imkanı.</li>
            <li><strong>Kullanıcı Bildirimleri</strong>: Bir kullanıcı sohbete katıldığında veya ayrıldığında bildirimler gösterilir.</li>
            <li><strong>Kullanıcı Listesi</strong>: Aktif kullanıcıların listesini görüntüleme.</li>
        </ul>

        <h2>Kurulum</h2>
        <h3>Gereksinimler</h3>
        <p>Node.js yüklü olmalıdır.</p>

        <h3>Adımlar</h3>
        <ol>
            <li><strong>Depoyu Klonlayın:</strong>
                <pre><code>git clone https://github.com/DoganayBalaban/Chat-App.git</code></pre>
            </li>
            <li><strong>Proje Dizini:</strong>
                <pre><code>cd Chat-App</code></pre>
            </li>
            <li><strong>Bağımlılıkları Yükleyin:</strong>
                <pre><code>npm install</code></pre>
            </li>
            <li><strong>Sunucuyu Başlatın:</strong>
                <pre><code>npm start</code></pre>
                <p>Sunucu varsayılan olarak <code>http://localhost:3000</code> adresinde çalışacaktır. Tarayıcınızda bu adresi ziyaret ederek uygulamayı kullanabilirsiniz.</p>
            </li>
        </ol>

        <h2>Kullanım</h2>
        <ul>
            <li><strong>Sohbet Odasına Katılma:</strong> Ana sayfada bir kullanıcı adı girerek mevcut bir odaya katılabilir veya yeni bir oda oluşturabilirsiniz.</li>
            <li><strong>Mesaj Gönderme:</strong> Metin kutusuna mesajınızı yazıp gönder butonuna tıklayarak mesaj gönderebilirsiniz.</li>
            <li><strong>Oda Değiştirme:</strong> Farklı bir odaya geçmek için ana sayfaya dönüp yeni bir oda seçebilirsiniz.</li>
        </ul>

        <h2>Teknolojiler</h2>
        <ul>
            <li><strong>Node.js</strong>: Sunucu tarafı çalışmaları için.</li>
            <li><strong>Socket.IO</strong>: Gerçek zamanlı iletişim için.</li>
            <li><strong>Express.js</strong>: Web sunucusu oluşturmak için.</li>
            <li><strong>HTML/CSS/JavaScript</strong>: Ön yüz geliştirmesi için.</li>
        </ul>

        <h2>Katkıda Bulunma</h2>
        <p>Katkılarınızı memnuniyetle karşılıyoruz. Lütfen önce bir konu açarak neyi değiştirmek veya eklemek istediğinizi tartışın.</p>

        <h2>Lisans</h2>
        <p>Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için <code>LICENSE</code> dosyasına bakabilirsiniz.</p>
    </div>
</body>
</html>
