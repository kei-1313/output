import likedPost from '@/action/likes/likedPost';
import { createLikesRepository } from '@/repository/likes/LikesRepository';
import { createLikesService } from '@/service/likes/LikesService';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    //Likes
    const likesRepository = createLikesRepository();
    const likesService = createLikesService(likesRepository);

    const body = await request.json();
    if (!body.userId || !body.postId) {
      return new NextResponse('userId and postId are required', {
        status: 400,
      });
    }
    const { userId, postId } = body;

    const likes = await likesService.createLikes(postId, userId);

    revalidatePath('/outputs');
    return NextResponse.json(likes);
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    //Likes
    const likesRepository = createLikesRepository();
    const likesService = createLikesService(likesRepository);
    const body = await request.json();
    if (!body.userId || !body.postId) {
      return new NextResponse('userId and postId are required', {
        status: 400,
      });
    }

    const { userId, postId } = body;
    const like = await likedPost(postId, userId);
    if (!like) {
      return new NextResponse('Like not found', { status: 404 });
    }

    const deletedLike = await likesService.deleteLikes(like.id);

    if (!deletedLike) {
      return new NextResponse('Failed to delete like', { status: 404 });
    }

    revalidatePath('/outputs');
    return NextResponse.json(deletedLike);
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
