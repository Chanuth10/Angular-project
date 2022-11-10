import 'package:flutter/material.dart';
import 'package:procuro_system/components/CustomAppBar.dart';
import 'package:procuro_system/components/bottom_nav_bar.dart';
import 'package:procuro_system/screens/all-suppliers/components/body.dart';

import '../../enums.dart';

class AllSupplierScreen extends StatelessWidget {
  static String routeName = "/supplier";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(
        title: "All Suppliers",
      ),
      body: Body(),
      bottomNavigationBar: BottomNavBar(selectedMenu: MenuState.suppliers),
    );
  }
}
