import 'package:flutter/material.dart';
import 'package:procuro_system/components/CustomAppBar.dart';
import 'package:procuro_system/components/bottom_nav_bar.dart';
import 'package:procuro_system/components/topbar.dart';
import 'package:procuro_system/screens/all-deliveries/components/body.dart';

import '../../enums.dart';

class AllDeliveriesScreen extends StatelessWidget {
  static String routeName = "/deliveries";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(
        title: "All Deliveries",
      ),
      body: Body(),
      bottomNavigationBar: BottomNavBar(selectedMenu: MenuState.deliveries),
    );
  }
}
