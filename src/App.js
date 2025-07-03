import Discussions from "./app/components/Discussions"

let count = 0
// Görevler:
// - Global count değişkeni yerine useState veya useReducer hook'unu kullanarak tartışma numaralarını güvenli şekilde yönetmelisiniz.
// - Tartışma listesi (Discussions) ve tartışma kartı (Discussion) bileşenlerini modüler hale getirip ayrı dosyalara taşıyın.
// - Mock bir veri seti oluşturarak tartışma kartlarını dinamik hale getirin ve veri tabanından geliyormuş gibi yapı kuralım.
// - React temellerine ve Tailwind CSS yapısına bağlı kalarak bileşenlerinizi geliştireceğiz.
// - Uygulamanın beklenen çıktısını görmek için public klasöründe yer alan preview.png dosyasını inceleyebilirsiniz.



export default function App() {
  return (
    <main className='max-w-2xl mx-auto p-6'>
      <h1 className='text-2xl font-bold text-gray-800 mb-4'>Tartışmalar</h1>
      <Discussions />
    </main>
  )
}
