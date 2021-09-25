import * as React from 'react';
import './Home.css';

export default function Home(): React.ReactElement {
  return (
    <>
      <div className="home-content">
        <div className="home-bg">
          <div className="home-title">
            唐呈俊
          </div>
          <div className="home-description">
            <p>从看不见的手到囚徒困境，再到算法歧视，我们已经经历了许多。</p>
            <p>各种博弈类型，均受到信息条件的限制。</p>
            <p>信息共享的过程中，如何确保各方利益。</p>
            <p>水能载舟，亦能覆舟。</p>
            <p>致力于通过智能和隐私算法提高人类生活质量。</p>
            <p>这里是Lexa Tang的个人学术站。</p>
          </div>
        </div>
      </div>
    </>
  );
}
