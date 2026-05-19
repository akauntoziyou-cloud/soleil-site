export default function Home() {
  return (
    <main className="min-h-screen bg-[#2b1d16] text-white">

      {/* TOP */}
      <section
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/top.jpg')",
        }}
      >
        <div className="bg-black/60 p-10 rounded-3xl text-center">

          <h1 className="text-6xl font-bold mb-4">
            soleil〜ソレイユ〜
          </h1>

          <p className="text-2xl text-gray-200">
            三宮のアットホームなスナック
          </p>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 text-center">

        <h2 className="text-4xl font-bold mb-8">
          ABOUT
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300 leading-9 text-lg">
          soleil〜ソレイユ〜は、
          三宮でゆったり楽しめる
          アットホームなスナックです。
          <br /><br />
          初めての方でも安心して楽しめる、
          温かい空間を大切にしています。
        </p>

      </section>

      {/* SYSTEM */}
<section className="py-24 px-6 bg-[#241812]">

  <div className="max-w-3xl mx-auto bg-[#3a281f] rounded-3xl p-10 shadow-2xl">

    <h2 className="text-4xl font-bold text-center mb-12">
      SYSTEM
    </h2>

    <div className="space-y-6 text-lg">

      {/* セット料金 */}
      <div className="border-b border-gray-600 pb-4">
        <div className="flex justify-between">
          <span>セット料金（男性）</span>
          <span>¥5,000</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>セット料金（女性）</span>
          <span>¥2,000</span>
        </div>
      </div>

      {/* ボトル */}
      <div className="flex justify-between border-b border-gray-600 pb-4">
        <span>ボトルキープ</span>
        <span>¥10,000〜</span>
      </div>

      {/* 営業日 */}
<div className="space-y-3 border-b border-gray-600 pb-4">

  <div className="flex justify-between">
    <span>月曜日</span>
    <span>予約制で営業</span>
  </div>

  <div className="flex justify-between">
    <span>土曜日</span>
    <span>定休日</span>
  </div>

  <div className="flex justify-between">
    <span>日曜日</span>
    <span>定休日</span>
  </div>

  <div className="flex justify-between">
    <span>祝日</span>
    <span>定休日</span>
  </div>

</div>


      {/* 特別プラン */}
      <div className="bg-amber-900/40 border border-amber-600 rounded-2xl p-5 mt-6">

        <p className="text-amber-300 font-bold mb-2">
          掲載見た方限定
        </p>

        <p className="text-white text-xl font-semibold">
          初回：飲み放題＋歌い放題
        </p>

        <p className="text-2xl font-bold text-amber-200 mt-2">
          ¥6,000ポッキリ
        </p>

      </div>

    </div>

  </div>

</section>

      {/* CAST */}
      <section className="py-24 px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          CAST
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* みゆき */}
          <div className="bg-[#3a281f] rounded-3xl overflow-hidden shadow-2xl">

            <img
              src="/girl1.jpg"
              alt="みゆき"
              className="w-full h-[500px] object-cover"
            />

            <div className="p-8">

              <p className="text-amber-300 mb-3">
                soleil〜ソレイユ〜 ママ
              </p>

              <h3 className="text-3xl font-bold mb-5">
                みゆき
              </h3>

              <p className="text-gray-300 mb-3">
                趣味：歌うこと・美容
              </p>

              <p className="text-gray-400 leading-8">
                「みんなの第二の我が家」をモットーに、
                お客様とわいわい楽しく過ごしています♪
                初めての方もお気軽にお越しください。
              </p>

            </div>

          </div>

          {/* ひな */}
          <div className="bg-[#3a281f] rounded-3xl overflow-hidden shadow-2xl">

            <img
              src="/girl2.jpg"
              alt="ひな"
              className="w-full h-[500px] object-cover"
            />

            <div className="p-8">

              <p className="text-amber-300 mb-3">
                CAST
              </p>

              <h3 className="text-3xl font-bold mb-5">
                ひな
              </h3>

              <p className="text-gray-300 mb-3">
                趣味：お話すること
              </p>

              <p className="text-gray-400 leading-8">
                一緒に楽しい時間を過ごしましょう♪
                初めての方も大歓迎です！
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ACCESS */}
      <section className="py-24 px-6 bg-[#241812] text-center">

        <h2 className="text-4xl font-bold mb-10">
          ACCESS
        </h2>

        <p className="text-gray-300 mb-10 leading-8">
          〒650-0001<br />
          兵庫県神戸市中央区加納町4-8-14<br />
          第11シャルマンビル2階
        </p>

        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl">

          <iframe
            src="https://www.google.com/maps?q=650-0001%20兵庫県神戸市中央区加納町4-8-14&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>

        </div>

      </section>

    </main>
  );
}