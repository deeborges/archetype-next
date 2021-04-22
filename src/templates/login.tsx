import React from 'react';

export default function LoginTemplate(children: React.ReactNode) {
  return (
    <div>
      <aside>
        <ul>
          <li>Ola mundo</li>
          <li>Ola mundo</li>
          <li>Ola mundo</li>
          <li>Ola mundo</li>
        </ul>
      </aside>
      <main>
        <header>
          <div>
            <span>oi |</span>
            <span>oi |</span>
            <span>oi |</span>
            <span>oi |</span>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
