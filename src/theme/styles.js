import { Platform, Dimensions } from 'react-native';
import Fonts from './fonts';
import Colors from './colors';
import Size from './sizes';


export default {
  appContainer: {
    backgroundColor: '#000',
  },
  navbar: {
    backgroundColor: Colors.brand.primary,
    borderBottomWidth: 0,
  },
  navbarTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: Fonts.base.family,
    fontSize: Fonts.base.size,
  },
  navbarButton: {
    tintColor: '#ffffff',
  },
  tabbar: {
    backgroundColor: Colors.tabbar.background,
    borderTopColor: Colors.border,
    borderTopWidth: 1,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(240, 240, 240, .9)',
  },
  detailMarginTop: {
    marginTop: Size.navbarHeight,
  },
  discoverParentStyle: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  discoverTitle: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  discoverTextColor: {
    color: '#03a9f4',
  },
  discoverFirstGrid: {
    flex: 2,
    flexDirection: 'row',
  },
  discoverOtherGrid: {
    flex: 2,
    flexDirection: 'row',
    marginTop: 15,
  },
  discoverGridPositionLeft: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  discoverGridPositionRight: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  discoverGridTextItem: {
    color: '#03a9f4',
    ...Platform.select({
      ios: {
        marginTop: 10,
      },
      android: {
        marginTop: -15,
      },
    }),
  },
  discoverGridItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  discoverOnlineItem: {
    flex: 1,
  },
  discoverOnlineItemImage: {
    flex: 7,
    width: Dimensions.get('window').width - 30,
    resizeMode: 'stretch',
  },
  discoverOnlineItemTitle: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  discoverMoreItem: {
    flex: 1,
  },
  discoverMoreItemImage: {
    flex: 7,
    width: Dimensions.get('window').width - 30,
    resizeMode: 'stretch',
  },
  discoverMoreItemTitle: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255, .5)',
  },
  roadmapListStyle: {
    marginLeft: 15,
    marginRight: 15,
    height: 40,
    flex: 1,
    justifyContent: 'center',
  },
  timeLine: {
    flex: 1,
    flexDirection: 'row',
  },
  timeLineParent: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeLineIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    color: '#03a9f4',
  },
  timeLineTopLine: {
    width: 2,
    height: 20,
    backgroundColor: '#03a9f4',
  },
  timeLineBottomLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#03a9f4',
  },
  timeLineCententParent: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 15,
    marginRight: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  timeLineTitle: {
    color: 'white',
    paddingLeft: 15,
  },
  timeLineTitleParent: {
    flex: 1,
    height: 30,
    justifyContent: 'center',
    backgroundColor: '#03a9f4',
  },
  timeLineContent: {
    padding: 15,
  },
  projectListTitleStyle: {
    paddingLeft: 15,
    backgroundColor: 'rgb(245,245,245)',
    flex: 1,
    height: 40,
    justifyContent: 'center',
  },
  projectListContentStyle: {
    marginLeft: 15,
    flex: 1,
    height: 40,
    justifyContent: 'center',
  },
  projectDetailItemStyle: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  projectDetailItemTitleStyle: {
    marginLeft: 15,
    marginRight: 15,
    height: 40,
    flex: 1,
    justifyContent: 'center',
  },
  projectDetailItemDescStyle: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
  },
  projectDetailItemLinkStyle: {
    marginLeft: 15,
    marginRight: 15,
    lineHeight: 20,
  },
  projectDetailHintStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  dialogStyle: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.1)',
  },
  dialogStyleContent: {
    borderRadius: 2,
    flexDirection: 'row',
    minWidth: 180,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingRight: 15,
    paddingBottom: 20,
    paddingLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogTextStyle: {
    marginLeft: 10,
    color: '#999',
    minWidth: 150,
    maxWidth: 210,
  },
  dialogTextTipsStyle: {
    fontWeight: 'bold',
  },
};
