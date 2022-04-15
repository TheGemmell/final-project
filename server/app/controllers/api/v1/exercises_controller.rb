class Api::V1::ExercisesController < ApplicationController
  before_action :set_workout
  before_action :set_exercise, only: [:show, :update, :destroy]

  # GET /exercises/1
  def show
    render json: @exercise
  end

  # POST /exercises
  def create
    @exercise = Exercise.new(exercise_params)
    @exercise.workout_id = @workout.id

    if @exercise.save
      render json: @exercise, status: :created
    else
      render json: @exercise.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /exercises/1
  def update
    if @exercise.update(exercise_params)
      render json: @exercise
    else
      render json: @exercise.errors, status: :unprocessable_entity
    end
  end

  # DELETE /exercises/1
  def destroy
    @exercise.destroy
  end

  private
  
    def set_workout
      @workout = Workout.find(params[:workout_id])
    end
    
    # Use callbacks to share common setup or constraints between actions.
    def set_exercise
      @exercise = Exercise.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def exercise_params
      params.require(:workout_id)
      params.require(:exercise).permit(:name, :description, :sets, :weight, :status)
    end
end
