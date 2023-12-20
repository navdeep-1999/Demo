import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../utils/colors'
import { vh, vw } from '../utils/dimensions'
import { useDispatch, useSelector } from 'react-redux';
import { dispatch } from '../utils/navigationService';
import { getAttendanceDetails } from '../action';

interface Props {
  navigation: any;
  route: any
}

interface DetailViewProps {
  title: string;
  subTitle: string;
}

export default function AttendanceDetailScreen(props: Props) {

  const dispatch: any = useDispatch()

  const { hRuserId } = useSelector((state: any) => state?.userReducer)

  useEffect(() => {
    dispatch(getAttendanceDetails({ hRuserId }, (data: any) => { }))
  }, [])


  const DetailView = ({ title, subTitle }: DetailViewProps) => {
    return (
      <View style={styles?.detailViewContainer}>
        <Text style={styles?.title}>{title}</Text>
        <Text style={styles?.subTitle}>{subTitle}</Text>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles?.container}>
      <Text style={styles?.heading}>Attendance Detail</Text>
      <View style={styles?.row}>
        <DetailView title='Employee Name' subTitle={''} />
        <DetailView title='Date' subTitle='' />
      </View>
      <View style={styles?.row}>
        <DetailView title='Department' subTitle='' />
        <DetailView title='Designation' subTitle='' />
      </View>
      <View style={styles?.row}>
        <DetailView title='Location' subTitle='' />
        <DetailView title='Employee Code' subTitle='' />
      </View>
      <View style={styles?.row}>
        <DetailView title='Batch Timing' subTitle='' />
        <DetailView title='Total Time' subTitle='' />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.WHITE,
    paddingHorizontal: vw(20),
    paddingTop: vh(20)
  },
  heading: {
    fontSize: vw(20),
    alignSelf: 'center',
    fontWeight: 'bold',
    color: colors?.BLACK,
    marginBottom: vh(40)
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: vh(10)
  },
  detailViewContainer: {
    width: '45%'
  },
  title: {
    fontWeight: 'bold',
    color: colors?.BLACK
  },
  subTitle: {
    marginTop: vh(1),
    color: colors?.BLACK
  }
})