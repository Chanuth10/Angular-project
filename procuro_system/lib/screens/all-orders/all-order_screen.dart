import 'package:flutter/material.dart';
import 'package:procuro_system/components/CustomAppBar.dart';
import 'package:procuro_system/components/bottom_nav_bar.dart';
import 'package:procuro_system/components/topbar.dart';
import 'package:procuro_system/screens/all-orders/components/body.dart';

import '../../enums.dart';

class AllOrderScreen extends StatelessWidget {
  static String routeName = "/order";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(
        title: "All Orders",
      ),
      body: Body(),
      bottomNavigationBar: BottomNavBar(selectedMenu: MenuState.orders),
    );
  }
}
