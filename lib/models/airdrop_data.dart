// To parse this JSON data, do
//
//     final airdrop = airdropFromJson(jsonString);

import 'dart:convert';

Airdrop airdropFromJson(String str) => Airdrop.fromJson(json.decode(str));

String airdropToJson(Airdrop data) => json.encode(data.toJson());

class Airdrop {
  String id;
  String totalSupply;
  String circulation;
  double totalMined;
  double miningRate;
  DateTime updatedAt;

  Airdrop({
    required this.id,
    required this.totalSupply,
    required this.circulation,
    required this.totalMined,
    required this.miningRate,
    required this.updatedAt,
  });

  factory Airdrop.fromJson(Map<String, dynamic> json) => Airdrop(
        id: json["_id"] as String,
        totalSupply: json["totalSupply"] as String,
        circulation: json["circulation"] as String,
        totalMined: (json["totalMined"] as num?)?.toDouble() ?? 0.0,
        miningRate: (json["miningRate"] as num?)?.toDouble() ?? 0.0,
        updatedAt: DateTime.parse(json["updatedAt"] as String),
      );

  Map<String, dynamic> toJson() => {
        "_id": id,
        "totalSupply": totalSupply,
        "circulation": circulation,
        "totalMined": totalMined,
        "miningRate": miningRate,
        "updatedAt": updatedAt.toIso8601String(),
      };
}
