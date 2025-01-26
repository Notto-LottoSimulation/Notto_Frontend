// App.jsx
import { useState } from 'react'

const App = () => {
  const [numbers, setNumber] = useState(() => generateNumbers()); // 랜덤번호 생성
  const [numberMode, setNumberMode] = useState('random'); // 옵션 : 당첨번호 랜덤/고정
  const [betAmount, setBetAmount] = useState(5000); // 게임당 쓸 금액

  function generateNumbers() {
    const nums = new Set();
    while (nums.size < 7) {
      nums.add(Math.floor(Math.random() * 45) + 1)
    }
    return Array.from(nums).sort((a, b) => a - b)
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-12">NOTTO</h1>

      {/* 상단 로또 번호 */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {numbers.slice(0, 6).map((num, idx) => (
          <div
            key={idx}
            className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl"
          >
            {num}
          </div>
        ))}
        <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xl ml-4">
          {numbers[6]}
        </div>
      </div>

      {/* 설정 */}
      <div className="max-w-xs mx-auto space-y-4 mb-8">
        <div className="flex items-center justify-between">
          <label className="font-medium">당첨번호:</label>
          <select
            value={numberMode}
            onChange={(e) => setNumberMode(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="random">랜덤</option>
            <option value="fixed">고정</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <label className="font-medium">게임당 구매액:</label>
          <input
            type="number"
            value={betAmount}
            onChange={(e) => setBetAmount(Number(e.target.value))}
            className="border rounded px-2 py-1 w-24 text-right"
            min="1000"
            step="1000"
          />
        </div>
      </div>

      {/* 시작 버튼 */}
      <button
        className="w-full max-w-xs mx-auto block py-3 px-6 bg-green-500 text-white font-bold rounded-lg text-lg"
        onClick={() => {
          if (numberMode === 'random') {
            setNumbers(generateNumbers());
          }
        }}
      >
        시작하기
      </button>
    </div>
  )
}

export default App