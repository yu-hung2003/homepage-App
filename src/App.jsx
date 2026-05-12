import { useState } from "react";

const BK = ['white','beige','pink','blue','green','gray','black'];
const BN = { white:'白', beige:'米', pink:'粉', blue:'藍', green:'綠', gray:'灰', black:'黑' };

const BGT = {
  white:{ dot:'#D0D0D0', bg:'#FAFAFA', text:'#404040', sub:'#808080', title:'#505050', footer:'#AAAAAA',
    card:{ bg:'#F2F2F2', bd:'#DCDCDC', ttl:'#404040', desc:'#707070', btn:'#505050', btnTx:'#fff' } },
  beige:{ dot:'#C8A878', bg:'#F7F0E6', text:'#4A3820', sub:'#8A6840', title:'#7A5030', footer:'#9A7858',
    card:{ bg:'#EDE0C4', bd:'#D0B888', ttl:'#4A3820', desc:'#8A6840', btn:'#8A6030', btnTx:'#fff' } },
  pink: { dot:'#F0A0B8', bg:'#FFF0F5', text:'#603040', sub:'#A07080', title:'#C04870', footer:'#B08090',
    card:{ bg:'#FDE0EA', bd:'#EAB0C8', ttl:'#903058', desc:'#A07080', btn:'#D06090', btnTx:'#fff' } },
  blue: { dot:'#7890D8', bg:'#EEF4FF', text:'#203060', sub:'#507090', title:'#3050A0', footer:'#7090B0',
    card:{ bg:'#D8E8F8', bd:'#A0C0E0', ttl:'#203060', desc:'#507090', btn:'#3868C0', btnTx:'#fff' } },
  green:{ dot:'#78B888', bg:'#EDFAF2', text:'#204030', sub:'#508060', title:'#307050', footer:'#709070',
    card:{ bg:'#D0ECCC', bd:'#98C898', ttl:'#204030', desc:'#508060', btn:'#408050', btnTx:'#fff' } },
  gray: { dot:'#909090', bg:'#F0F0F0', text:'#404040', sub:'#707070', title:'#505050', footer:'#909090',
    card:{ bg:'#E4E4E4', bd:'#C4C4C4', ttl:'#404040', desc:'#707070', btn:'#606060', btnTx:'#fff' } },
  black:{ dot:'#484848', bg:'#181818', text:'#E0E0E0', sub:'#888888', title:'#D0D0D0', footer:'#606060',
    card:{ bg:'#242424', bd:'#404040', ttl:'#E0E0E0', desc:'#888888', btn:'#505050', btnTx:'#E0E0E0' } },
};

// ⚠️ 部署後請將以下 URL 更換為你的實際 Vercel 網址
const GAMES = [
  {
    icon:'🔢', name:'1A2B 終極密碼',
    desc:'猜出4位不重複數字，綠色位置對，黃色數字存在，挑戰你的邏輯！',
    url:'https://1a2b-game-meqh-9ri7mjc24-yu-hung2003s-projects.vercel.app',
    tag:'猜數字',
  },
  {
    icon:'🧩', name:'數獨',
    desc:'在9×9格中填入1-9，每行、每列、每宮格數字不重複，三種難度挑戰！',
    url:'https://sudoku-game-lovat.vercel.app', // ← 部署後更換
    tag:'邏輯推理',
  },
  {
    icon:'🟩', name:'Wordle 猜字',
    desc:'猜出隱藏英文單字！綠色位置對、黃色字母存在、灰色不在答案中。',
    url:'https://wordle-game-eight-alpha.vercel.app', // ← 部署後更換
    tag:'英文猜字',
  },
  {
    icon:'🔢', name:'2048',
    desc:'滑動方向鍵合併相同數字，挑戰達成2048，莫蘭迪風格美觀配色！',
    url:'https://2048-game-wine-iota.vercel.app', // ← 部署後更換
    tag:'數字合併',
  },
];

export default function App() {
  const [theme, setTheme] = useState('pink');
  const T = BGT[theme];
  const C = T.card;

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; }
        .hub-card { transition: transform 0.18s, box-shadow 0.18s; }
        .hub-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.12); }
        button { cursor: pointer; transition: all 0.15s; font-family: inherit; }
        button:hover { opacity: 0.85; }
        @media (max-width: 480px) {
          .hub-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ minHeight:'100vh', background:T.bg, color:T.text, fontFamily:"'Microsoft JhengHei','Segoe UI',sans-serif", padding:'20px 16px', transition:'background 0.25s,color 0.25s' }}>
        <div style={{ maxWidth:560, margin:'0 auto' }}>

          {/* 標題區 */}
          <div style={{ marginBottom:24 }}>
            <div style={{ fontSize:32, fontWeight:700, color:T.title, letterSpacing:1 }}>🎮 遊戲樂園</div>
            <div style={{ fontSize:13, color:T.sub, marginTop:4, letterSpacing:1 }}>選擇想玩的遊戲，開始挑戰！</div>

            {/* 主題色點 */}
            <div style={{ display:'flex', gap:8, marginTop:10 }}>
              {BK.map(k => (
                <div key={k} onClick={() => setTheme(k)} title={BN[k]} style={{
                  width:18, height:18, borderRadius:'50%', background:BGT[k].dot,
                  cursor:'pointer', flexShrink:0,
                  boxShadow: k===theme ? `0 0 0 2.5px ${T.bg},0 0 0 4.5px ${BGT[k].dot}` : 'none',
                  transform: k===theme ? 'scale(1.15)' : 'scale(1)',
                  transition:'transform 0.15s,box-shadow 0.15s',
                }} />
              ))}
            </div>
          </div>

          {/* 遊戲卡片 */}
          <div className="hub-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
            {GAMES.map((g, i) => (
              <div key={i} className="hub-card" style={{
                background:C.bg, border:`1.5px solid ${C.bd}`,
                borderRadius:14, padding:'20px 16px', cursor:'pointer',
              }} onClick={() => window.open(g.url, '_blank')}>
                <div style={{ fontSize:36, marginBottom:8 }}>{g.icon}</div>
                <div style={{ display:'inline-block', fontSize:10, fontWeight:600, letterSpacing:1, textTransform:'uppercase', background:C.btn, color:C.btnTx, borderRadius:4, padding:'2px 8px', marginBottom:8 }}>{g.tag}</div>
                <div style={{ fontSize:16, fontWeight:700, color:C.ttl, marginBottom:6 }}>{g.name}</div>
                <div style={{ fontSize:12, lineHeight:1.6, color:C.desc, marginBottom:14 }}>{g.desc}</div>
                <button style={{
                  display:'inline-block', padding:'7px 18px', borderRadius:8,
                  border:'none', background:C.btn, color:C.btnTx,
                  fontSize:12, fontWeight:600,
                }}>
                  開始遊玩 →
                </button>
              </div>
            ))}
          </div>

          {/* 頁尾 */}
          <div style={{ textAlign:'center', fontSize:11, color:T.footer, marginTop:24 }}>
            Yu's Game Hub ✨ 點擊卡片前往遊玩
          </div>
        </div>
      </div>
    </>
  );
}