import { NextResponse } from 'next/server';

const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID;

export async function GET() {
  try {
    // Fetch media from Instagram Graph API
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Instagram posts');
    }

    const data = await response.json();

    // Filter and format the posts
    const formattedPosts = data.data.map((post: any) => ({
      id: post.id,
      type: post.media_type.toLowerCase(),
      url: post.media_url,
      permalink: post.permalink,
      caption: post.caption,
      timestamp: post.timestamp,
      thumbnailUrl: post.thumbnail_url || post.media_url
    }));

    return NextResponse.json({ posts: formattedPosts });
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Instagram posts' },
      { status: 500 }
    );
  }
} 