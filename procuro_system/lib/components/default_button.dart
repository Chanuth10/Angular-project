import 'package:flutter/material.dart';

import 'package:procuro_system/constants.dart';
import 'package:procuro_system/size_config.dart';

class DefaultButton extends StatelessWidget {
  const DefaultButton({
    Key? key,
    this.text,
    this.press,
  }) : super(key: key);

  final String? text;
  final Function? press;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
        width: double.infinity,
        height: getProportionateScreenHeight(60),
        child: TextButton(
          style: TextButton.styleFrom(
            shape:
                RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
            primary: Colors.white,
            backgroundColor: kPrimaryDarkColor,
          ),
          onPressed: press as void Function()?,
          child: Text(text!,
              style: TextStyle(
                  fontSize: getProportionateScreenWidth(18),
                  color: Colors.white,
                  fontWeight: FontWeight.w600)),
        ));
  }
}
