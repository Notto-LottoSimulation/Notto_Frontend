// App.jsx
import { useState } from 'react'

const App = () => {
  const [numbers, setNumbers] = useState(() => {
    const nums = new Set();
    while (nums.size < 7) {
      nums.add(Math.floor(Math.random() * 45) + 1)
    }
    return Array.from(nums).sort((a, b) => a - b)
  })

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-12">NOTTO</h1>

      {/* 상단 로또 번호 */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {numbers.slice(0, 6).map((num, idx) => (
          <div
            key={idx}
            className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl"
          >
            {num}
          </div>
        ))}
        <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xl">
          {numbers[6]}
        </div>
      </div>

      {/* 시작 버튼 */}
      <button
        className="w-full max-w-xs mx-auto block py-3 px-6 bg-green-500 text-white font-bold rounded-lg text-lg"
      // onClick={() => {
      //   const nums = new Set()
      //   while (nums.size < 7) {
      //     nums.add(Math.floor(Math.random() * 45) + 1)
      //   }
      //   setNumbers(Array.from(nums).sort((a, b) => a - b))
      // }}
      >
        시작하기
      </button>
    </div>
  )
}

export default App