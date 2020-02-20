<?php

namespace App\Http\Controllers;

use App\Post;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class PageController extends Controller
{
    //
    public function addpost(Request $request){
        $rules = [
            'title' => 'required',
            'category' => 'required',
            'content' => 'required',
            'image' => 'required'
        ];
        $data = $request->all();
        $userId = User::where('email', $data['belongs_to'])->first()->id;
//        dd($userId);
        $validator = Validator::make($data, $rules);
        if($validator->fails()){
            $error = $validator->errors();
            return response()->json([
                'error' => $error
                ]);
        }else{
            if($request->hasFile('image')) {
                $file = $request->File('image');
//                dd($file);
                //Get filename with extension
                $fileNameToStoreWithExt = $file[0]->getClientOriginalName();
//                dd($fileNameToStoreWithExt);
                //Get just filename
                $filename = pathinfo($fileNameToStoreWithExt, PATHINFO_FILENAME);
                //Get just ext
                $extension = $file[0]->getClientOriginalExtension();
                //File to store
                $fileNameToStore = $filename . '_' . time() . '.' . $extension;
                //Upload Image
                $path = $file[0]->storeAs('image', $fileNameToStore);
                $file[0]->move('storage/image', $fileNameToStore);
                $post = new Post();
                $post['title'] = $data['title'];
                $post['category'] = $data['category'];
                $post['content'] = $data['content'];
                $post['belongs_to'] = $userId;

                $post['image'] = $path;

                $post->save();
                return response()->json([
                    'success' => '200',
                    'response' => $post
                ]);
            }else {
                return response()->json([
                    'error' => 'add image'
                ]);
            }
        }
    }
    public function getAllPost($email){
        $id = User::where('email', $email)->first()->id;
        $post = Post::where('belongs_to', $id)->get();
        if(!$post){
            return response()->json([
                'error' => 'you have no post yet'
            ]);
        }
        return response()->json([
            'success' => '200',
            'response' => $post
        ]);
    }
}
