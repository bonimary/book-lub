'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert(
    //   'Books',
    //   [
    //     {
    //       title: 'Девушка с татуировкой дракона',
    //       autor: 'Стиг Ларссон',
    //       description:
    //         'Микаэль Блумквист, журналист, и Лисбет Саландер, талантливая хакерша, объединяются для расследования исчезновения девушки из влиятельной семьи, произошедшего 40 лет назад. Они сталкиваются с сетью коррупции и тайн, которые могут стоить им жизни.',
    //       imge: 'https://cv4.litres.ru/pub/c/cover/9825426.jpg',
    //       pages: 465,
    //       language: 'Русский язык',
    //       categoryId: 1,
    //     },
    //     {
    //       title: 'Исчезнувшая',
    //       autor: 'Гиллиан Флинн',
    //       description:
    //         'В пятую годовщину свадьбы Эми исчезает, оставив загадочные улики. Под подозрением оказывается её муж Ник. История разворачивается с неожиданными поворотами, раскрывая правду о браке, лжи и манипуляциях.',
    //       imge: 'https://www.litres.ru/pub/c/cover/6028900.jpg',
    //       pages: 422,
    //       language: 'Русский язык',
    //       categoryId: 1,
    //     },
    //     {
    //       title: 'Шерлок Холмс: Полное собрание романов и рассказов',
    //       autor: 'Артур Конан Дойл',
    //       description:
    //         'Сборник классических детективных историй о Шерлоке Холмсе и его верном друге докторе Ватсоне. Они расследуют самые запутанные преступления, используя дедуктивный метод и острый ум Холмса.',
    //       imge: 'https://imo10.labirint.ru/books/765168/cover.jpg/242-0',
    //       pages: 1088,
    //       language: 'Русский язык',
    //       categoryId: 1,
    //     },
    //     {
    //       title: 'Код да Винчи',
    //       autor: 'Дэн Браун',
    //       description:
    //         'Профессор Роберт Лэнгдон оказывается втянутым в загадочное убийство в Лувре. Вместе с криптологом Софи Неве он раскрывает тайны, связанные с религиозными символами и древними тайными обществами.',
    //       imge: 'https://www.litres.ru/pub/c/cover/118567.jpg',
    //       pages: 689,
    //       language: 'Русский язык',
    //       categoryId: 1,
    //     },
    //     {
    //       title: 'Большая маленькая ложь',
    //       autor: 'Лиана Мориарти',
    //       description:
    //         'История о трех женщинах, чьи жизни переплетаются в маленьком пригороде. Их дружба, секреты и ложь приводят к трагическим событиям, которые раскрываются в ходе полицейского расследования.',
    //       imge: 'https://www.litres.ru/pub/c/cover/9336782.jpg',
    //       pages: 460,
    //       language: 'Русский язык',
    //       categoryId: 1,
    //     },
    //     {
    //       title: 'Война и мир',
    //       autor: 'Лев Толстой',
    //       description:
    //         'Эпическая сага, охватывающая судьбы нескольких аристократических семей во время наполеоновских войн. Роман исследует темы любви, власти, судьбы и человеческой природы.',
    //       imge: 'https://www.litres.ru/pub/c/cover/69495367.jpg',
    //       pages: 1225,
    //       language: 'Русский язык',
    //       categoryId: 2,
    //     },
    //     {
    //       title: 'Преступление и наказание',
    //       autor: 'Фёдор Достоевский',
    //       description:
    //         'История о бедном студенте Родионе Раскольникове, который совершает убийство и сталкивается с моральными и психологическими последствиями своего поступка.',
    //       imge: 'https://www.litres.ru/pub/c/cover/64758176.jpg',
    //       pages: 671,
    //       language: 'Русский язык',
    //       categoryId: 2,
    //     },
    //     {
    //       title: 'Гордость и предубеждение',
    //       autor: 'Джейн Остин',
    //       description:
    //         'Роман о любви и социальных предрассудках в Англии XVIII века. История Элизабет Беннет и её сложных отношений с мистером Дарси.',
    //       imge: 'https://www.litres.ru/pub/c/cover/11280949.jpg',
    //       pages: 432,
    //       language: 'Русский язык',
    //       categoryId: 2,
    //     },
    //     {
    //       title: '1984',
    //       autor: 'Джордж Оруэлл',
    //       description:
    //         'Антиутопический роман, описывающий тоталитарное общество, где за каждым шагом граждан следит Большой Брат. История Уинстона Смита, который пытается сохранить свою индивидуальность.',
    //       imge: 'https://www.litres.ru/pub/c/cover/63589523.jpg',
    //       pages: 328,
    //       language: 'Русский язык',
    //       categoryId: 2,
    //     },
    //     {
    //       title: 'Гамлет',
    //       autor: 'Уильям Шекспир',
    //       description:
    //         'Трагедия о датском принце Гамлете, который стремится отомстить за убийство своего отца. Произведение исследует темы мести, безумия и моральной дилеммы.',
    //       imge: 'https://www.litres.ru/pub/c/cover/23931757.jpg',
    //       pages: 342,
    //       language: 'Русский язык',
    //       categoryId: 2,
    //     },
    //     {
    //       title: 'Думай медленно... решай быстро',
    //       autor: 'Даниэль Канеман',
    //       description:
    //         'Исследование двух систем мышления: быстрой, интуитивной и медленной, аналитической. Канеман объясняет, как эти системы влияют на наше принятие решений и поведение.',
    //         imge: 'https://www.litres.ru/pub/c/cover/6444517.jpg',
    //       pages: 512,
    //       language: 'Русский язык',
    //       categoryId: 3,
    //     },
    //     {
    //       title: 'Психология влияния',
    //       autor: 'Роберт Чалдини',
    //       description:
    //         'Книга о принципах убеждения и влияния. Чалдини раскрывает шесть ключевых принципов, которые помогают людям говорить «да».',
    //         imge: 'https://www.litres.ru/pub/c/cover/6994167.jpg',
    //       pages: 336,
    //       language: 'Русский язык',
    //       categoryId: 3,
    //     },
    //     {
    //       title: 'Эмоциональный интеллект',
    //       autor: 'Дэниел Гоулман',
    //       description:
    //         'Исследование роли эмоционального интеллекта в личной и профессиональной жизни. Гоулман утверждает, что эмоциональные навыки могут быть важнее IQ.',
    //       imge: 'https://cv7.litres.ru/pub/c/cover_415/5024477.jpg',
    //       pages: 352,
    //       language: 'Русский язык',
    //       categoryId: 3,
    //     },
    //     {
    //       title: 'Поток: Психология оптимального переживания',
    //       autor: 'Михай Чиксентмихайи',
    //       description:
    //         'Концепция «потока» — состояния полного погружения и удовлетворения в деятельности. Книга исследует, как достичь этого состояния для повышения качества жизни.',
    //       imge: 'https://www.litres.ru/pub/c/cover/4244565.jpg',
    //       pages: 303,
    //       language: 'Русский язык',
    //       categoryId: 3,
    //     },
    //     {
    //       title: 'Сила привычки',
    //       autor: 'Чарльз Дахигг',
    //       description:
    //         'Исследование того, как формируются привычки и как их можно изменить. Дахигг предлагает стратегии для создания позитивных изменений в жизни.',
    //       imge: 'https://www.litres.ru/pub/c/cover/169859.jpg',
    //       pages: 371,
    //       language: 'Русский язык',
    //       categoryId: 3,
    //     },
    //     {
    //       title: 'Алгоритмы. Построение и анализ',
    //       autor: 'Томас Кормен, Чарльз Лейзерсон, Рональд Ривест, Клиффорд Штайн',
    //       description:
    //         'Классический учебник по алгоритмам, охватывающий широкий спектр тем, от сортировки и поиска до сложных графовых алгоритмов.',
    //       imge:
    //         'https://upload.wikimedia.org/wikipedia/ru/e/e4/Introduction_to_Algorithms_2nd_Russian_cover.jpg',
    //       pages: 1312,
    //       language: 'Русский язык',
    //       categoryId: 4,
    //     },
    //     {
    //       title: 'Чистый код: создание, анализ и рефакторинг',
    //       autor: 'Роберт Мартин',
    //       description:
    //         'Практическое руководство по написанию чистого и понятного кода. Автор делится принципами и лучшими практиками программирования.',
    //       imge: 'https://www.litres.ru/pub/c/cover/70729888.jpg',
    //       pages: 464,
    //       language: 'Русский язык',
    //       categoryId: 4,
    //     },
    //     {
    //       title: 'Структура и интерпретация компьютерных программ',
    //       autor: 'Гарольд Абельсон, Джеральд Сассман',
    //       description:
    //         'Введение в основы компьютерных наук, акцентирующее внимание на абстракции и проектировании программ.',
    //       imge:
    //         'https://content.img-gorod.ru/pim/products/images/1f/57/018ee09d-7b22-7065-b74a-8a0651441f57.jpg?width=304&height=438&fit=bounds',
    //       pages: 657,
    //       language: 'Русский язык',
    //       categoryId: 4,
    //     },
    //     {
    //       title: 'Искусство программирования',
    //       autor: 'Дональд Кнут',
    //       description:
    //         'Обширный труд, охватывающий множество тем в области алгоритмов и программирования. Считается классикой в компьютерных науках.',
    //       imge: 'https://www.litres.ru/pub/c/cover/38842138.jpg',
    //       pages: 3168,
    //       language: 'Русский язык',
    //       categoryId: 4,
    //     },
    //     {
    //       title: 'Программист-прагматик: путь от подмастерья к мастеру',
    //       autor: 'Эндрю Хант, Дэвид Томас',
    //       description:
    //         'Книга, фокусирующаяся на профессионализме и развитии навыков программиста. Описывает подходы к решению проблем и улучшению кода.',
    //       imge: 'https://cdn1.ozone.ru/s3/multimedia-f/6016016523.jpg',
    //       pages: 352,
    //       language: 'Русский язык',
    //       categoryId: 4,
    //     },
    //     {
    //       title: 'Властелин колец',
    //       autor: 'Дж. Р. Р. Толкин',
    //       description: 'Эпическая сага о приключениях Фродо и его друзей в Средиземье.',
    //       imge: 'https://www.litres.ru/pub/c/cover/42339309.jpg',
    //       pages: 1178,
    //       language: 'Русский язык',
    //       categoryId: 5,
    //     },
    //     {
    //       title: 'Игра престолов',
    //       autor: 'Джордж Р. Р. Мартин',
    //       description:
    //         "Первая книга из серии 'Песнь льда и огня', рассказывающая о борьбе за Железный трон.",
    //       imge: 'https://cv6.litres.ru/pub/c/cover_330/8369065.jpg',
    //       pages: 694,
    //       language: 'Русский язык',
    //       categoryId: 5,
    //     },
    //     {
    //       title: 'Хроники Нарнии',
    //       autor: 'К. С. Льюис',
    //       description: 'Серия книг о приключениях детей в волшебной стране Нарнии.',
    //       imge: 'https://www.litres.ru/pub/c/cover/64901567.jpg',
    //       pages: 767,
    //       language: 'Русский язык',
    //       categoryId: 5,
    //     },
    //     {
    //       title: 'Колесо времени',
    //       autor: 'Роберт Джордан',
    //       description:
    //         'Масштабная серия, исследующая борьбу света и тьмы в фэнтезийном мире.',
    //       imge: 'https://cv5.litres.ru/pub/c/cover_415/68346853.jpg',
    //       pages: 1216,
    //       language: 'Русский язык',
    //       categoryId: 5,
    //     },
    //     {
    //       title: 'Хоббит, или Туда и обратно',
    //       autor: 'Дж. Р. Р. Толкин',
    //       description:
    //         'История о путешествии Бильбо Бэггинса и его приключениях с гномами.',
    //       imge: 'https://cv9.litres.ru/pub/c/cover_415/43517791.jpg',
    //       pages: 310,
    //       language: 'Русский язык',
    //       categoryId: 5,
    //     },
    //     {
    //       title: 'Убить пересмешника',
    //       autor: 'Харпер Ли',
    //       description:
    //         'История взросления в южных штатах США, затрагивающая темы расизма и справедливости.',
    //       imge: 'https://www.litres.ru/pub/c/cover/129770.jpg',
    //       pages: 324,
    //       language: 'Русский язык',
    //       categoryId: 6,
    //     },
    //     {
    //       title: 'Над пропастью во ржи',
    //       autor: 'Дж. Д. Сэлинджер',
    //       description:
    //         'История подростка, который переживает кризис и ищет свое место в мире.',
    //       imge: 'https://www.litres.ru/pub/c/cover/127781.jpg',
    //       pages: 214,
    //       language: 'Русский язык',
    //       categoryId: 6,
    //     },
    //     {
    //       title: 'Маленькие женщины',
    //       autor: 'Луиза Мэй Олкотт',
    //       description: 'Роман о жизни и взрослении четырех сестер в Новой Англии.',
    //       imge: 'https://litres.ru/pub/c/cover/67817826.jpg',
    //       pages: 759,
    //       language: 'Русский язык',
    //       categoryId: 6,
    //     },
    //     {
    //       title: 'Моби Дик',
    //       autor: 'Герман Мелвилл',
    //       description:
    //         'Эпическая история о капитане Ахаве и его одержимости белым китом.',
    //       imge: 'https://cv0.litres.ru/pub/c/cover_330/64778007.jpg',
    //       pages: 635,
    //       language: 'Русский язык',
    //       categoryId: 6,
    //     },
    //     {
    //       title: 'Великий Гэтсби',
    //       autor: 'Ф. Скотт Фицджеральд',
    //       description: 'История о богатстве и иллюзиях в эпоху джаза в Америке.',
    //       imge: 'https://www.litres.ru/pub/c/cover/69824539.jpg',
    //       pages: 180,
    //       language: 'Русский язык',
    //       categoryId: 6,
    //     },
    //     {
    //       title: 'Пушки августа',
    //       autor: 'Барбара Такман',
    //       description:
    //         'Детальный анализ событий, приведших к началу Первой мировой войны.',
    //       imge: 'https://www.litres.ru/pub/c/cover/9471396.jpg',
    //       pages: 511,
    //       language: 'Русский язык',
    //       categoryId: 7,
    //     },
    //     {
    //       title: 'Восстание: История Второй мировой войны',
    //       autor: 'Энтони Бивор',
    //       description: 'Обширное исследование ключевых событий Второй мировой войны.',
    //       imge: 'https://cv4.litres.ru/pub/c/cover/51613643.jpg',
    //       pages: 880,
    //       language: 'Русский язык',
    //       categoryId: 7,
    //     },
    //     {
    //       title: 'ГУЛАГ: История',
    //       autor: 'Энн Эпплбаум',
    //       description: 'Исследование системы трудовых лагерей в Советском Союзе.',
    //       imge: 'https://www.litres.ru/pub/c/cover/12193711.jpg',
    //       pages: 736,
    //       language: 'Русский язык',
    //       categoryId: 7,
    //     },
    //     {
    //       title: 'Сапиенс: Краткая история человечества',
    //       autor: 'Юваль Ной Харари',
    //       description: 'История человечества от древних времен до современности.',
    //       imge: 'https://www.litres.ru/pub/c/cover/22150614.jpg',
    //       pages: 443,
    //       language: 'Русский язык',
    //       categoryId: 7,
    //     },
    //     {
    //       title: 'История Рима',
    //       autor: 'Мэри Бирд',
    //       description: 'Обзор истории Рима от его основания до падения империи.',
    //       imge: 'https://www.litres.ru/pub/c/cover/22119610.jpg',
    //       pages: 606,
    //       language: 'Русский язык',
    //       categoryId: 7,
    //     },
    //     {
    //       title: 'Мы',
    //       autor: 'Евгений Замятин',
    //       description:
    //         'Антиутопический роман о тоталитарном государстве, где индивидуальность подавляется.',
    //       imge: 'https://www.litres.ru/pub/c/cover/7444105.jpg',
    //       pages: 224,
    //       language: 'Русский язык',
    //       categoryId: 8,
    //     },
    //     {
    //       title: 'О дивный новый мир',
    //       autor: 'Олдос Хаксли',
    //       description:
    //         'Роман о будущем, где технологии и социальный контроль создают иллюзию утопии.',
    //       imge: 'https://www.litres.ru/pub/c/cover/33421950.jpg',
    //       pages: 288,
    //       language: 'Русский язык',
    //       categoryId: 8,
    //     },
    //     {
    //       title: '451 градус по Фаренгейту',
    //       autor: 'Рэй Брэдбери',
    //       description: 'История о мире, где книги запрещены, а пожарные сжигают их.',
    //       imge: 'https://www.litres.ru/pub/c/cover/39507162.jpg',
    //       pages: 194,
    //       language: 'Русский язык',
    //       categoryId: 8,
    //     },
    //     {
    //       title: 'Скотный двор',
    //       autor: 'Джордж Оруэлл',
    //       description:
    //         'Аллегорическая повесть о революции животных на ферме, отражающая политические события.',
    //       imge: 'https://www.litres.ru/pub/c/cover/66991204.jpg',
    //       pages: 112,
    //       language: 'Русский язык',
    //       categoryId: 8,
    //     },
    //     {
    //       title: 'Повелитель мух',
    //       autor: 'Уильям Голдинг',
    //       description:
    //         'Роман о группе мальчиков, оказавшихся на необитаемом острове и погружающихся в хаос.',
    //       imge: 'https://www.litres.ru/pub/c/cover/119029.jpg',
    //       pages: 224,
    //       language: 'Русский язык',
    //       categoryId: 8,
    //     },
    //     {
    //       title: 'В поисках утраченного времени',
    //       autor: 'Марсель Пруст',
    //       description:
    //         'Эпическая сага о памяти и времени, раскрывающая тонкости человеческих отношений и переживаний.',
    //       imge: 'https://cv4.litres.ru/pub/c/cover/49867522.jpg',
    //       pages: 700,
    //       language: 'Русский язык',
    //       categoryId: 9,
    //     },
    //     {
    //       title: 'Дюна',
    //       autor: 'Фрэнк Герберт',
    //       description:
    //         'Эпическая сага о борьбе за контроль над планетой Арракис, где добывается самый ценный ресурс Вселенной — спайс.',
    //       imge: 'https://cv9.litres.ru/pub/c/cover_415/55339991.jpg',
    //       pages: 688,
    //       language: 'Русский язык',
    //       categoryId: 10,
    //     },
    //     {
    //       title: 'Солярис',
    //       autor: 'Станислав Лем',
    //       description:
    //         'Роман о космической станции, где исследуется загадочная планета Солярис, способная преобразовывать мысли и воспоминания людей в реалии.',
    //       imge: 'https://www.litres.ru/pub/c/cover/131925.jpg',
    //       pages: 204,
    //       language: 'Русский язык',
    //       categoryId: 10,
    //     },
    //     {
    //       title: 'Нейромант',
    //       autor: 'Уильям Гибсон',
    //       description:
    //         'Классика киберпанка, рассказывающая о наемном хакере, который пытается вернуть, что было у него украдено в цифровом мире.',
    //       imge:
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jFx25iNlCuZbuj26AZUp95CfrvcB2gbLLQ&s',
    //       pages: 271,
    //       language: 'Русский язык',
    //       categoryId: 10,
    //     },
    //     {
    //       title: 'Марсианин',
    //       autor: 'Энди Вейер',
    //       description:
    //         'Приключения астронавта, который застрял на Марсе и должен использовать свои навыки, чтобы выжить.',
    //       imge: 'https://cv4.litres.ru/pub/c/cover_330/8348342.jpg',
    //       pages: 369,
    //       language: 'Русский язык',
    //       categoryId: 10,
    //     },
    //     {
    //       title: 'Унесенные ветром',
    //       autor: 'Маргарет Митчелл',
    //       description:
    //         "История о любви и борьбе за выживание во времена Гражданской войны в США с точки зрения молодой женщины Скарлет О'Hara.",
    //       imge: 'https://www.litres.ru/pub/c/cover/66706014.jpg',
    //       pages: 1037,
    //       language: 'Русский язык',
    //       categoryId: 11,
    //     },
    //     {
    //       title: 'Одиссея',
    //       autor: 'Гомер',
    //       description:
    //         'Эпическая поэма о приключениях Одиссея на его пути домой после окончания Троянской войны.',
    //       imge: 'https://www.litres.ru/pub/c/cover/146507.jpg',
    //       pages: 541,
    //       language: 'Русский язык',
    //       categoryId: 11,
    //     },
    //     {
    //       title: 'Приключения Гекльберри Финна',
    //       autor: 'Марк Твен',
    //       description:
    //         'Приключения Гекльберри Финна и его друга Тома Сойера, полные захватывающих событий и глубоких размышлений о морали.',
    //       imge: 'https://www.litres.ru/pub/c/cover/67313691.jpg',
    //       pages: 366,
    //       language: 'Русский язык',
    //       categoryId: 11,
    //     },
    //     {
    //       title: 'Затерянный мир',
    //       autor: 'Артур Конан Дойл',
    //       description:
    //         'Приключенческий роман о создании экспедиции для исследования затерянного мира, полного динозавров и древних животных.',
    //       imge: 'https://www.litres.ru/pub/c/cover/70226827.jpg',
    //       pages: 320,
    //       language: 'Русский язык',
    //       categoryId: 11,
    //     },
    //   ],
    //   {},
    // );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
