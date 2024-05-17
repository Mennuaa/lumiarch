import React from 'react'
import './stars.css'
export const Stars = () => {
	return (
		<div
			className='popup_stars'
			style={{
				background: "url('/images/Popup.png')",
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<button className='popup_stars_close'>
				<img src='mobile/close.png' alt='' />
			</button>
			<h2 className='popup_stars_title'>Чтобы собрать все звезды</h2>
			<p className='popup_stars_subtitle'>Ниже написано, как это работает</p>

			<div className='popup_stars_stars'>
				<div className='star'>★</div>
				<div className='star'>☆</div>
				<div className='star'>☆</div>
				<div className='star'>☆</div>
				<div className='star'>☆</div>
			</div>
			<br />
			<div className=''>
				<ol className='popup_stars_list'>
					<div>
						<li>Представьтесь</li>
						<div className='popup_stars_stars'>
							<div className='star'>★</div>
							<div className='star'>☆</div>
							<div className='star'>☆</div>
							<div className='star'>☆</div>
							<div className='star'>☆</div>
						</div>
					</div>
					<div>
						<li>Изучите все материалы на этой странице</li>
						<div className='popup_stars_stars'>
							<div className='star'>★</div>
							<div className='star'>★</div>
							<div className='star'>☆</div>
							<div className='star'>☆</div>
							<div className='star'>☆</div>
						</div>
					</div>
					<div>
						<li>
							Оставьте ваш email и мы вышлем вам вам полезную информацию о
							Камбодже, налогах, инсайтах и других подробностях региона, которые
							могут вам понадобиться для принятия решения.{' '}
						</li>
						<div className='popup_stars_stars'>
							<div className='star'>★</div>
							<div className='star'>★</div>
							<div className='star'>★</div>
							<div className='star'>☆</div>
							<div className='star'>☆</div>
						</div>
					</div>
					<div>
						<li>
							Поделитесь нашей страницей и примите участие в партнерской
							программе. Поделиться можно уже сейчас, партнерская программа пока
							в разработке, оставьте email если хотите принять в ней участие
						</li>
						<div className='popup_stars_stars'>
							<div className='star'>★</div>
							<div className='star'>★</div>
							<div className='star'>★</div>
							<div className='star'>★</div>
							<div className='star'>☆</div>
						</div>
					</div>
					<div>
						<li>
							Воспользуйтесь нашим инвестиционным калькулятором, посчитайте
							доходы от сдачи квартиры в аренду и от продажи, а также все
							дополнительные расходы (налоги и пр.) Пока в разработке
						</li>
						<div className='popup_stars_stars'>
							<div className='star'>★</div>
							<div className='star'>★</div>
							<div className='star'>★</div>
							<div className='star'>★</div>
							<div className='star'>★</div>
						</div>
					</div>
				</ol>
			</div>
		</div>
	)
}
