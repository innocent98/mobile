import 'package:flutter/material.dart';
import '../../constants/colors.dart' as app_color;

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  int _selectedTabIndex = 0;

  // final List<BottomNavigationBarItem> bottomNavBarItems = [
  //   const BottomNavigationBarItem(
  //     icon: Icon(Icons.home),
  //     label: 'Home',
  //   ),
  //   const BottomNavigationBarItem(
  //     icon: Icon(Icons.search),
  //     label: 'Search',
  //   ),
  //   const BottomNavigationBarItem(
  //     icon: Icon(Icons.favorite),
  //     label: 'Favorites',
  //   ),
  //   const BottomNavigationBarItem(
  //     icon: Icon(Icons.person),
  //     label: 'Profile',
  //   ),
  // ];

  static const TextStyle optionStyle =
      TextStyle(fontSize: 30, fontWeight: FontWeight.bold);

  static const List<Widget> _widgetOptions = <Widget>[
    Text(
      'Index 0: Home',
      style: optionStyle,
    ),
    Text(
      'Index 1: Business',
      style: optionStyle,
    ),
    Text(
      'Index 2: School',
      style: optionStyle,
    ),
  ];

  void onTabTapped(int index) {
    setState(() {
      _selectedTabIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: app_color.white,
      child: SafeArea(
          child: Scaffold(
        backgroundColor: app_color.white,
        body: Center(
          child: _widgetOptions.elementAt(_selectedTabIndex),
        ),
        bottomNavigationBar: BottomNavigationBar(
          items: const <BottomNavigationBarItem>[
            BottomNavigationBarItem(
              icon: Icon(Icons.home),
              label: 'Home',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.business),
              label: 'Business',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.school),
              label: 'School',
            ),
          ],
          currentIndex: _selectedTabIndex,
          selectedItemColor: Colors.amber[800],
          onTap: onTabTapped,
        ),
      )),
    );
  }
}
