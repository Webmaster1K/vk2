import './Categories.css';

function Categories() {
    let categories = ["Рекомендации", "Поиск", <hr></hr>, "Реакции", "Обновления", "Комментарии" ],
        news = "Новости",
        inside_news = ["Фото", "Видео", "Подкасты"];
    return (
        <div className="div_categories">
            <ul className="ul_categories">
                <li className="li_categories"><a href="#">{news}</a>
                    <ul className="ul_categories">
                        <li className="li_categories"><a href="#" style={{color: "grey"}}>{inside_news[0]}</a></li>
                        <li className="li_categories"><a href="#" style={{color: "grey"}}>{inside_news[1]}</a></li>
                        <li className="li_categories"><a href="#" style={{color: "grey"}}>{inside_news[2]}</a></li>
                    </ul>
                </li>
                <li className="li_categories"><a href="#">{categories[1]}</a></li>
                <li className="li_categories"><a href="#">{categories[2]}</a></li>
                <li className="li_categories"><a href="#">{categories[3]}</a></li>
                <li className="li_categories"><a href="#">{categories[4]}</a></li>
                <li className="li_categories"><a href="#">{categories[5]}</a></li>
            </ul>
        </div>
    );
  }
  
export default Categories;