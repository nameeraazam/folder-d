"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2, Edit } from "lucide-react";

interface Comment {
  id: string;
  postId: string;
  author: string;
  text: string;
  timestamp: string;
}

interface CommentSectionProps {
  postId: string;
}

const CommentSection = ({ postId }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  // Filter comments by postId when component mounts or postId changes
  useEffect(() => {
    // In a real app, you would fetch comments for this specific postId
    // For now, we'll filter the existing comments
    setComments(prevComments => 
      prevComments.filter(comment => comment.postId === postId)
    );
  }, [postId]);

  const handleAddComment = () => {
    if (!newComment.trim() || !authorName.trim()) return;
    
    const newCommentObj: Comment = {
      id: new Date().toISOString(),
      postId, // Include postId in the comment object
      author: authorName.trim(),
      text: newComment.trim(),
      timestamp: new Date().toLocaleString(),
    };
    
    setComments([newCommentObj, ...comments]);
    // In a real app, you would save to database with postId
    // await saveCommentToDatabase(postId, newCommentObj);
    setNewComment("");
    setAuthorName("");
  };

  const handleEditComment = (commentId: string) => {
    const commentToEdit = comments.find(
      comment => comment.id === commentId && comment.postId === postId
    );
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentId);
    }
  };

  const handleSaveEditedComment = () => {
    if (!newComment.trim() || !authorName.trim() || !editingCommentId) return;
    
    const updatedComments = comments.map(comment =>
      comment.id === editingCommentId && comment.postId === postId
        ? { 
            ...comment, 
            text: newComment.trim(), 
            author: authorName.trim(),
            timestamp: `${comment.timestamp} (edited)` 
          }
        : comment
    );
    
    setComments(updatedComments);
    // In a real app: await updateCommentInDatabase(postId, editingCommentId, updatedComment);
    setNewComment("");
    setAuthorName("");
    setEditingCommentId(null);
  };

  const handleDeleteComment = (commentId: string) => {
    setComments(comments.filter(
      comment => !(comment.id === commentId && comment.postId === postId)
    ));
    // In a real app: await deleteCommentFromDatabase(postId, commentId);
  };

  const handleKeyPress = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (editingCommentId) {
        handleSaveEditedComment();
      } else {
        handleAddComment();
      }
    }
  };

  // Filter comments to only show ones for this postId
  const postComments = comments.filter(comment => comment.postId === postId);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-6">Comments</h2>
      
      <div className="mb-6">
        <Input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your name"
          className="w-full mb-2"
          onKeyDown={handleKeyPress}
        />
        <Input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="w-full mb-2"
          onKeyDown={handleKeyPress}
        />
        <Button
          onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
          className="w-full"
          disabled={!newComment.trim() || !authorName.trim()}
        >
          {editingCommentId ? "Save Changes" : "Post Comment"}
        </Button>
      </div>

      <div className="space-y-4">
        {postComments.length > 0 ? (
          postComments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold">{comment.author}</div>
                    <div className="text-sm text-gray-500 mb-2">
                      {comment.timestamp}
                    </div>
                    <p className="text-gray-700">{comment.text}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEditComment(comment.id)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteComment(comment.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;