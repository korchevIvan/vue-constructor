export const spacings = {
    'mb-xxxl': 'mb-xxxl',
    'mb-xxl': 'mb-xxl',
    'mb-xl': 'mb-xl',
    'mb-l': 'mb-l',
    'mb-m': 'mb-m',
    'mb-s': 'mb-s',
    'mb-xs': 'mb-xs',
    'mb-xxs': 'mb-xxs',
}

export const colors = {
    'color-black': 'black',
    'color-silver': 'silver',
    'color-silver-brown': 'silver-brown',
    'color-white': 'white',
    'color-red': 'red',
    'color-dark': 'dark',
    'color-light': 'light',
    'color-brown-light': 'brown-light',
    'color-dimgray': 'dimgray',
    'color-brown-dark': 'brown-dark',
    'color-green': 'green',
    'color-dark-red': 'dark-red',
}

export const types = {
    banners: 'Баннеры',
    buttons: 'Кнопки',
    slider_products: 'Слайдер с товарами',
    slider_gallery: 'Галлерея с фото',
    timeline: 'Таймлайн',
    video: 'Видео',
    columns: 'Колонки'
}

export const buttonStyle = {
    'primary': 'primary',
    'secondary': 'secondary',
    'inherit-white': 'inherit-white',
    'inherit-text': 'inherit-text',
}

const typesBlock = {
    'list': 'Список',
    'slider': 'Слайдер',
    'column': 'Колонки'
}
const containerBlock = {
    'simple': 'Обычный',
    'medium': 'Средний',
}
const textAlign = {
    'text-left': 'Слева',
    'text-center': 'По центру',
    'text-right': 'Справа',
}

const blockItemsMainFields = {
    name: {
        label: 'Наименование айтема',
        type: 'text',
    },
    order: {
        label: 'Сортировка',
        type: 'number'
    },
}


export const blockBanners = {
    desktopType: {
        label: 'Тип блока на ПК',
        type: 'select',
        options: typesBlock
    },
    mobileType: {
        label: 'Тип блока на телефоне',
        type: 'select',
        options: typesBlock
    },
    width: {
        label: 'Контейнер',
        type: 'select',
        options: containerBlock
    },
    gutter: {
        label: 'Межколомное расстояние',
        type: 'checkbox',
    },
    contentPosition: {
        label: 'Позиция контента',
        type: 'select',
        options: {
            inside: 'Внутри',
            outside: 'Снаружи',
        }
    },
    columnType: {
        label: 'Тип колонок',
        type: 'select',
        options: {
            '': 'Нет',
            '1-2': '1-2',
            '2-1': '2-1',
        }
    },
    items: {
        type: 'array',
        fields: {
            ...blockItemsMainFields,
            img: {
                label: 'Изображение',
                type: 'file',
                accept: 'image/*'
            },
            imgMobile: {
                label: 'Изображение на моб.',
                type: 'file',
                accept: 'image/*'
            },
            heading: {
                label: 'Заголовок',
                type: 'text',
            },
            headingColor: {
                label: 'Цвет заголовка',
                type: 'select',
                options: colors
            },
            description: {
                label: 'Описание',
                type: 'text',
            },
            descriptionColor: {
                label: 'Цвет описания',
                type: 'select',
                options: colors
            },
            href: {
                label: 'Ссылка',
                type: 'text',
            },
            textAlign: {
                label: 'Позиция текста',
                type: 'select',
                options: textAlign
            },
            linkLabel: {
                label: 'Надпись ссылки',
                type: 'text'
            },
            linkType: {
                label: 'Тип ссылки',
                type: 'select',
                options: {
                    'button': 'Кнопка',
                    'icon-text': 'Иконка с текстом',
                }
            },
            buttonStyle: {
                label: 'Стиль кнопки',
                type: 'select',
                options: buttonStyle
            },
            iconTextColor: {
                label: 'Цвет иконки с текстом',
                type: 'select',
                options: colors
            }
        }
    }
}
export const blockButtons = {
    desktopButtonFull: {
        label: 'На всю ширину в ПК',
        type: 'checkbox'
    },
    items: {
        type: 'array',
        fields: {
            ...blockItemsMainFields,
            href: {
                label: 'Ссылка',
                type: 'text',
            },
            label: {
                label: 'Надпись',
                type: 'text',
            },
            type: {
                label: 'Стиль кнопки',
                type: 'select',
                options: buttonStyle
            },
        }
    }
}

export const blockSliderProducts = {}
export const blockSliderGallery = {
    items: {
        type: 'array',
        fields: {
            ...blockItemsMainFields,
            img: {
                label: 'Изображение',
                type: 'file',
                accept: 'image/*'
            },
        }
    }
}
export const blockTimeline = {
    items: {
        type: 'array',
        fields: {
            ...blockItemsMainFields,
            heading: {
                label: 'Заголовок',
                type: 'text',
            },
            subheading: {
                label: 'Подзаголовок',
                type: 'text',
            },
        }
    }
}
export const blockVideo = {
    img: {
        label: 'Изображение',
        type: 'file',
        accept: 'image/*'
    },
    frame_link: {
        label: 'Ссылка на фрейм',
        type: 'text',
    },
}

export const blockColumns = {
    items: {
        type: 'array',
        fields: {
            ...blockItemsMainFields,
            content: {
                label: 'Контент',
                type: 'editor'
            }
        }
    }
}

export const typesFields = {
    video: blockVideo,
    buttons: blockButtons,
    timeline: blockTimeline,
    slider_gallery: blockSliderGallery,
    banners: blockBanners,
    columns: blockColumns,
}