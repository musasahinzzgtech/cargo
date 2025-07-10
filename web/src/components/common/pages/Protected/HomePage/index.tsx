import React, { useEffect, useState } from "react";
import {
  Card,
  Avatar,
  List,
  Typography,
  Spin,
  Button,
  Input,
  Space,
  Image,
  message,
} from "antd";
import {
  MessageOutlined,
  ShareAltOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAsync, createPostAsync } from "store/post/asyncActions";
import CreatePost from "./components/CreatePost";

const { Title, Text } = Typography;
const { TextArea } = Input;

const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

const HomePage = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector((state) => state.post);
  const [newPostContent, setNewPostContent] = useState("");
  const [newComment, setNewComment] = useState({});

  useEffect(() => {
    dispatch(fetchPostsAsync() as any);
  }, [dispatch]);

  const handleAddComment = (postId: any) => {
    const text = (newComment as any)[postId]?.trim();
    if (!text) return;
    message.info("Yorum özelliği henüz bağlı değil (backend).");
    setNewComment((prev) => ({ ...prev, [postId]: "" }));
  };

  const handleCreatePost = () => {
    const content = newPostContent.trim();
    if (!content) return;

    dispatch(createPostAsync({ content } as any) as any)
      .unwrap()
      .then(() => {
        setNewPostContent("");
        message.success("Gönderi oluşturuldu!");
      })
      .catch((err) => {
        message.error(err || "Gönderi oluşturulamadı");
      });
  };

  return (
    <div style={{ width: "60rem", margin: "auto", padding: 24 }}>
      <Title level={3}>Gönderi Akışı</Title>

      <CreatePost />

      {/* Post Feed */}
      {isLoading ? (
        <Spin tip="Yükleniyor..." />
      ) : error ? (
        <Text type="danger">{error}</Text>
      ) : (
        <List
          dataSource={posts}
          itemLayout="vertical"
          renderItem={(post) => (
            <Card
              key={post._id}
              style={{ marginBottom: 20 }}
              title={
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Avatar>{getInitials(post.author?.name || "K")}</Avatar>
                  <Text strong>{post.author?.name || "Kullanıcı"}</Text>
                </div>
              }
            >
              <Text>{post.content}</Text>

              {/* Images */}
              {post.images?.length > 0 && (
                <Image.PreviewGroup>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                      marginTop: 12,
                    }}
                  >
                    {post.images.map((img, index) => (
                      <Image
                        key={index}
                        src={img}
                        width={120}
                        height={80}
                        style={{ objectFit: "cover", borderRadius: 6 }}
                      />
                    ))}
                  </div>
                </Image.PreviewGroup>
              )}

              {/* Actions */}
              <Space style={{ marginTop: 12 }}>
                <Button icon={<LikeOutlined />} size="small" type="text">
                  Beğen
                </Button>
                <Button icon={<MessageOutlined />} size="small" type="text">
                  Yorum Yap
                </Button>
                <Button icon={<ShareAltOutlined />} size="small" type="text">
                  Paylaş
                </Button>
              </Space>

              {/* Comments */}
              {post.comments?.length > 0 && (
                <div style={{ marginTop: 16 }}>
                  <Text strong>Yorumlar:</Text>
                  <List
                    size="small"
                    dataSource={post.comments}
                    renderItem={(comment, idx) => (
                      <List.Item key={idx}>
                        <List.Item.Meta
                          avatar={
                            <Avatar>{getInitials(comment.author)}</Avatar>
                          }
                          title={<Text strong>{comment.author}</Text>}
                          description={comment.text}
                        />
                      </List.Item>
                    )}
                  />
                </div>
              )}

              {/* Add Comment */}
              <div style={{ marginTop: 12 }}>
                <TextArea
                  rows={2}
                  placeholder="Yorumunuzu yazın..."
                  value={newComment[post._id] || ""}
                  onChange={(e) =>
                    setNewComment((prev) => ({
                      ...prev,
                      [post._id]: e.target.value,
                    }))
                  }
                />
                <Button
                  onClick={() => handleAddComment(post._id)}
                  type="primary"
                  size="small"
                  style={{ marginTop: 8 }}
                >
                  Yorum Ekle
                </Button>
              </div>
            </Card>
          )}
        />
      )}
    </div>
  );
};

export default HomePage;
