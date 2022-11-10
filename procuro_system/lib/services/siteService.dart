import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:procuro_system/models/Site.dart';

class SiteService {
  Future<SiteList> getAllSites() async {
    final response =
        await http.get(Uri.parse('http://localhost:3001/api/site'));

    if (response.statusCode == 200) {
      // If the server did return a 200 OK response,
      // then parse the JSON.
      var responseData = json.decode(response.body);

      print(responseData);
      return SiteList.fromJson(jsonDecode(response.body));
    } else {
      // If the server did not return a 200 OK response,
      // then throw an exception.
      throw Exception('Failed to load sites');
    }
  }
}
