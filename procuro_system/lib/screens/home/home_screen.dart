import 'package:flutter/material.dart';
import 'package:procuro_system/components/bottom_nav_bar.dart';
import 'package:procuro_system/components/topbar.dart';
import 'package:procuro_system/screens/home/components/body.dart';

import '../../enums.dart';

class HomeScreen extends StatelessWidget {
  static String routeName = "/home";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: Topbar(),
      body: Body(),
      bottomNavigationBar: BottomNavBar(selectedMenu: MenuState.home),
    );
  }
}
