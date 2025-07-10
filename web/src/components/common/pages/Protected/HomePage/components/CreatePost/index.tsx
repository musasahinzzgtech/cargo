import React, { useState } from "react";
import { Card, Input, Button, Upload, message, Row, Col } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { createPostAsync } from "store/post/asyncActions";

const { TextArea } = Input;

const CreatePost = ({
  authorId,
  onPostCreated,
}: {
  authorId: string;
  onPostCreated?: () => void;
}) => {
  const dispatch = useDispatch();
  const [newPostContent, setNewPostContent] = useState("");
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const { isLoading } = useSelector((state: any) => state.post); // optional

  const handleImageChange = ({ file }: any) => {
    const selectedFile = file as File;
    if (!selectedFile.type.startsWith("image/")) {
      message.error("Sadece görseller yüklenebilir.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrls((prev) => [...prev, reader.result as string]);
      setImageFiles((prev) => [...prev, selectedFile]);
    };
    reader.readAsDataURL(selectedFile);
  };

  const removeImage = (index: number) => {
    const updatedFiles = [...imageFiles];
    const updatedPreviews = [...previewUrls];
    updatedFiles.splice(index, 1);
    updatedPreviews.splice(index, 1);
    setImageFiles(updatedFiles);
    setPreviewUrls(updatedPreviews);
  };

  const handleCreatePost = async () => {
    if (!newPostContent.trim() && imageFiles.length === 0) {
      message.warning("Bir içerik veya görsel eklemelisiniz.");
      return;
    }

    const formData = new FormData();
    formData.append("content", newPostContent.trim());
    imageFiles.forEach((file) => {
      formData.append("images", file); // should match backend field name
    });

    const resultAction = await dispatch(createPostAsync(formData) as any);
    if (createPostAsync.fulfilled.match(resultAction)) {
      message.success("Gönderi başarıyla paylaşıldı!");
      setNewPostContent("");
      setImageFiles([]);
      setPreviewUrls([]);
      onPostCreated?.();
    } else {
      message.error(resultAction.payload || "Gönderi oluşturulamadı.");
    }
  };

  return (
    <Card style={{ marginBottom: 20 }}>
      <TextArea
        placeholder="Bir şeyler paylaş..."
        autoSize={{ minRows: 2, maxRows: 6 }}
        value={newPostContent}
        onChange={(e) => setNewPostContent(e.target.value)}
      />

      <Upload
        accept="image/*"
        customRequest={({ file, onSuccess }) => {
          handleImageChange({ file });
          onSuccess?.({}, new XMLHttpRequest());
        }}
        showUploadList={false}
        multiple
      >
        <Button icon={<PlusOutlined />} style={{ marginTop: 10 }}>
          Görsel Ekle
        </Button>
      </Upload>

      {previewUrls.length > 0 && (
        <Row gutter={[8, 8]} style={{ marginTop: 10 }}>
          {previewUrls.map((url, idx) => (
            <Col span={6} key={idx}>
              <div style={{ position: "relative" }}>
                <img
                  src={url}
                  alt={`preview-${idx}`}
                  style={{
                    width: "100%",
                    height: 100,
                    objectFit: "cover",
                    borderRadius: 6,
                  }}
                />
                <Button
                  type="primary"
                  shape="circle"
                  icon={<DeleteOutlined />}
                  size="small"
                  danger
                  onClick={() => removeImage(idx)}
                  style={{
                    position: "absolute",
                    top: 4,
                    right: 4,
                    zIndex: 10,
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>
      )}

      <Button
        type="primary"
        style={{ marginTop: 12 }}
        onClick={handleCreatePost}
        loading={isLoading}
        block
      >
        Paylaş
      </Button>
    </Card>
  );
};

export default CreatePost;
