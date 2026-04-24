import { Text, View } from "react-native";
import { getSharedFrontCopy, getSharedFrontTitle } from "@wc26/shared-front";
import { getWorkspaceHighlights, getWorkspaceSubtitle } from "@wc26/ui";

export default function Screen() {
  const highlights = getWorkspaceHighlights();

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: "center", backgroundColor: "#f8fafc" }}>
      <Text style={{ textTransform: "uppercase", letterSpacing: 2, marginBottom: 8 }}>
        {getSharedFrontTitle()}
      </Text>
      <Text style={{ fontSize: 34, fontWeight: "700", marginBottom: 12 }}>
        {getWorkspaceSubtitle("mobile")}
      </Text>
      <Text style={{ fontSize: 16, lineHeight: 24, marginBottom: 20 }}>
        {getSharedFrontCopy()}
      </Text>

      {highlights.map((highlight) => (
        <View key={highlight.title} style={{ marginBottom: 14, padding: 16, borderRadius: 16, backgroundColor: "#ffffff" }}>
          <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 4 }}>{highlight.title}</Text>
          <Text style={{ fontSize: 14, lineHeight: 20 }}>{highlight.description}</Text>
        </View>
      ))}
    </View>
  );
}
