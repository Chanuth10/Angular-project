import 'package:flutter/material.dart';
import 'package:procuro_system/components/CustomAppBar.dart';
import 'package:procuro_system/components/bottom_nav_bar.dart';
import 'package:procuro_system/components/topbar.dart';
import 'package:procuro_system/screens/create-delivery/components/body.dart';

import '../../enums.dart';

class CreateDeliveryScreen extends StatelessWidget {
  static String routeName = "/delivery/create";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(title: "Create Delivery",),
      body: Body(),
      bottomNavigationBar: BottomNavBar(selectedMenu: MenuState.home),
    );
  }
}
