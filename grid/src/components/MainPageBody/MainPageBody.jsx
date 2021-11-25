import React from 'react';

const MainPageBody = () => {
    return (
        <div className='main-page-body' >
            <div className="container">
                <div className="hero">
                    <h1>JavaScript</h1>
                    <div className="go-to-docs">
                        <button>Перейти к документации</button>
                    </div>
                    <img width='70' src="https://cdn-icons.flaticon.com/png/512/3550/premium/3550091.png?token=exp=1637735591~hmac=e0dba0d63172e4fca1aac40c62adbfa9" alt="arrow-icon" />
                </div>
                <div className="cards">
                    <div className="add-theme">
                        <button>
                            <span>+</span> Добавить тему
                        </button>
                    </div>
                    <div className="cards-list">
                        <div className="card">HTML</div>
                        <div className="card">CSS</div>
                        <div className="card">BOOTSTRAP</div>
                        <div className="card">Native JS</div>
                        <div className="card">HTML</div>
                        <div className="card">HTML</div>
                        <div className="card">HTML</div>
                        <div className="card">HTML</div>
                        <div className="card">HTML</div>
                    </div>
                </div>
                <div className="pagination-block">
                    <div><img width='50' src="https://cdn-icons-png.flaticon.com/512/545/545680.png" alt="" /></div>
                    <div>0</div>
                    <div><img width='50' src="https://cdn-icons-png.flaticon.com/512/545/545682.png" alt="" /></div>
                </div>
                <div className="edit-block">
                    <a href='#/' >
                        <img width='20' src="https://cdn-icons.flaticon.com/png/512/3071/premium/3071810.png?token=exp=1637814868~hmac=3cda49128c7c4e1ccf5dba00dae293eb" alt="" />
                        Редактировать
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MainPageBody;