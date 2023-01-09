export const WebsiteConf: any = {
  cookie: {
    maxAge: 60 * 60 * 4,
    path: '/'
  },
  i18n: {
    locale: 'en-US'
  },
  category: {
    mode: {
      MODE_KEY: 'mode',
      modeCode: 'grid'
    },
    pagination: {
      PAGE_KEY: 'page',
      SIZE_KEY: 'size'
    },
    sort: {
      SORT_KEY: 'sort',
      sortCode: 'position',
      sortDirection: 'DESC'
    }
  },
  product: {
    magnifierTypes: {
      type: 'glassMagnifier',
      magnifier: {
        mouseActivation: 'click',
        touchActivation: 'tap',
        dragToMove: 'true'
      },
      glassMagnifier: {
        allowOverflow: true,
        square: false,
        magnifierBorderSize: 5,
        magnifierBorderColor: 'rgba(255, 255, 255, .5)',
        magnifierSize: '40%'
      },
      sideBySideMagnifier: {
        fillAvailableSpace: false,
        fillGapLeft: 0,
        fillGapRight: 0,
        fillGapTop: 0,
        fillGapBottom: 0,
        alwaysInPlace: false,
        zoomContainerBorder: '1px solid rgba(0, 0, 0, .3)',
        zoomContainerBoxShadow: '1px 1px 2px 2px rgba(0, 0, 0, .3)'
      }
    }
  }
}
