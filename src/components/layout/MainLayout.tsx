import React from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import BottomNavigation from './BottomNavigation';
import Header from './Header';

export default function MainLayout({ children, path, navigation, headerTitle, type }: { children: JSX.Element, path: string, navigation: any, headerTitle: string, type?: 'home' | 'internal' }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ececec' }}>
      <Header title={headerTitle} type={type} />
      {children}
      <BottomNavigation active={path} navigation={navigation} />
    </SafeAreaView>
  )
}
